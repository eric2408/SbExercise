"use strict";

// This is the global list of the stories, an instance of StoryList
let storyList;

/** Get and show stories when site first loads. */

async function getAndShowStoriesOnStart() {
  storyList = await StoryList.getStories();
  $storiesLoadingMsg.remove();

  putStoriesOnPage();
}

/**
 * A render method to render HTML for an individual Story instance
 * - story: an instance of Story
 *
 * Returns the markup for the story.
 */

function generateStoryMarkup(story, showDeleteBtn = false) {
  // console.debug("generateStoryMarkup", story);

  const hostName = story.getHostName();

  const showStar = Boolean(currentUser);

  return $(`
      <li id="${story.storyId}">
        ${showDeleteBtn ? deleteBtnUi(): ""} 
        ${showStar ? starUi(story, currentUser): ""} 
        <a href="${story.url}" target="a_blank" class="story-link">
          ${story.title}
        </a>
        <small class="story-hostname">(${hostName})</small>
        <small class="story-author">by ${story.author}</small>
        <small class="story-user">posted by ${story.username}</small>
      </li>
    `);
}

function deleteBtnUi(){
  return `
  <span class="trash">
    <i class="fas fa-trash-alt"></i>
  </span>`;
}

function starUi(story, user){
  const fav = user.isStoryFavorite(story);
  const star = fav ? "fas" : "far";
  return `
  <span class="star">
    <i class="${star} fa-star"></i>
  </span>`;
}

/** Gets list of stories from server, generates their HTML, and puts on page. */

function putStoriesOnPage() {
  console.debug("putStoriesOnPage");

  $allStoriesList.empty();

  // loop through all of our stories and generate HTML for them
  for (let story of storyList.stories) {
    const $story = generateStoryMarkup(story);
    $allStoriesList.append($story);
  }

  $allStoriesList.show();
}

async function removeStory(evt){
  console.debug("removeStory");
  
  const $near = $(evt.target).closest("li");
  const storyId = $near.attr("id");

  await storyList.deleteStory(currentUser, storyId);
  await userStoriesPage();
}

$myStories.on("click", ".trash", removeStory);



async function submitStory(evt) {
  console.debug("submitStory");
  evt.preventDefault();

  const title = $("#title").val();
  const url = $("#url").val();
  const author = $("#author").val();
  const username = currentUser.username
  const data = {title, url, author, username };

  const story = await storyList.addStory(currentUser, data);

  const $story = generateStoryMarkup(story);
  $allStoriesList.prepend($story);

  $submitForm.slideUp("slow");
  $submitForm.trigger("reset");
}

$submitForm.on("submit", submitStory);


function userStoriesPage(){
  console.debug("userStoriesPage");

  $myStories.empty();

  if(currentUser.ownStories.length === 0){
    $myStories.append("<h5>No stories added by user yet!</h5>")
  } else {
    for(let story of currentUser.ownStories){
      const $story = generateStoryMarkup(story, true);
      $myStories.append($story)
    }
  }

  $myStories.show();
  
}

function userFavPage(){
  console.debug("userFavPage");

  $favoritesStory.empty();

  if(currentUser.favorites.length === 0){
    $favoritesStory.append("<h5>No favorites added!</h5>")
  } else {
    for(let story of currentUser.favorites){
      const $story = generateStoryMarkup(story)
      $favoritesStory.append($story);
    }
  }

  $favoritesStory.show();
}


async function toggleFav(evt) {
  console.debug("toggleFav");

  const $target = $(evt.target);
  const $closest = $target.closest("li");
  const storyId = $closest.attr("id");
  const story = storyList.stories.find(s => s.storyId === storyId);

  if($target.hasClass("fas")){
    await currentUser.deleteFavorite(story)
    $target.closest("i").toggleClass("fas far")
  } else {
    await currentUser.addFavorite(story)
    $target.closest("i").toggleClass("fas far")
  }
}

$loginStories.on("click", ".star", toggleFav);

