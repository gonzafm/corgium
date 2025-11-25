from collections import deque
class LRUCache:
    _capacity:int 
    _cache: dict[int,int]
    _queue: deque
    
    def __init__(self, capacity: int):
        self._capacity = capacity        
        self._cache = dict()
        self._queue = deque()

    def get(self, key: int) -> int:
        if key in self._cache:
            self._queue.remove(key)                 
            self._queue.append(key)
            return self._cache[key]
        return -1        

    def put(self, key: int, value: int) -> None:     
        if key in self._cache:
            self._queue.remove(key)                                    
        elif len(self._cache) == self._capacity:
            old_key = self._queue.popleft()               
            del self._cache[old_key]
        self._cache[key] = value
        self._queue.append(key)

# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)