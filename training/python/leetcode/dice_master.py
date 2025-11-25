
import random
from enum import Enum

class Dice(Enum):
    METEOR_STRIKE = 1
    FIRE_MASTER = 2
    DARK_DIMENSION = 3
    GRASSY_WALL = 4
    NIGHT_WALL = 5
    GOO_LAKE = 6
class DiceMaster:
    
    _sides = 6
    
    def roll_dice(self):
        roll = random.randint(1,self._sides)
        face = Dice(roll)
        print(face.name) 
        
if __name__ == "__main__":
    DiceMaster().roll_dice()