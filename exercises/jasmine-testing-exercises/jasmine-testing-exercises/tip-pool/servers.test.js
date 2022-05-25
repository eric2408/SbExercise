describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('no servers on the list when submitServerInfo() is empty', function () {
    serverNameInput.value='';
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  });

  it('should update on the table when updateServerTable()', function () {
    submitServerInfo();
    updateServerTable();

    let serveList = document.querySelectorAll('#serverTable tbody tr td');

    expect(serveList.length).toEqual(3);
    expect(serveList[0].innerText).toEqual('Alice');
    expect(serveList[1].innerText).toEqual('$0.00');
    expect(serveList[2].innerText).toEqual('X');
  });

  afterEach(function() {
    // teardown logic
    serverTbody.innerHTML = '';
    allServers = {};
    serverId = 0;
  });
});
