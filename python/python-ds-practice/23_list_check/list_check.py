def list_check(lst):
    """Are all items in lst a list?

        >>> list_check([[1], [2, 3]])
        True

        >>> list_check([[1], "nope"])
        False
    """
    for num in lst:
        if not isinstance(num, list):
            return false
        
    
    return true