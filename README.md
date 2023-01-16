# Secret Diary

- Initially the `SecretDiary` class is locked, meaning `addEntry(str)` and `getEntries()` should throw an error.
- When the user calls `unlock()`, `addEntry()` and `getEntries()` should work as desired.
- When the user calls `lock()` again `addEntry()` and `getEntries()` throw errors.

## User Stories
```
#1
As a user
So no one can access my diary
I want the diary to be lockable
```
Nouns: diary  
Verbs: lock  

| Objects | Properties | Messages | Output |
|---------|------------|----------|--------|
| Diary | isLocked @Boolean | lock() | Void |

```
#2
As a user
So that I can access my diary
I want the diary to be unlockable
```
Nouns: diary  
Verbs: unlock  
| Objects | Properties | Messages | Output |
|---------|------------|----------|--------|
| Diary | isLocked @Boolean | unlock() | Void |


```
#3
As a user
So that I can add write in my diary
I'd like the ability to add entries
```
Nouns: diary  
Verbs: add (set)  
| Objects | Properties | Messages | Output |
|---------|------------|----------|--------|
| Diary | entries @Array[@String] | addEntry() | Void |

```
#4
As a user
So that I can see what I've written in my diary
I'd like the ability to view entries
```
Nouns: diary  
Verbs: view (see/get)  
| Objects | Properties | Messages | Output |
|---------|------------|----------|--------|
| Diary | entries @Array[@String] | viewEntry() | @Array[@String] |


## Final Domain Model
| Objects | Properties | Messages | Output |
|---------|------------|----------|--------|
| Diary | isLocked @Boolean | unlock() | Void |
| | entries @Array[@String]  | addEntry() | Void |
| | | viewEntry() | Array[@String] |