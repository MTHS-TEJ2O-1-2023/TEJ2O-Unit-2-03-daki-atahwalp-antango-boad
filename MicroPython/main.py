"""
Created by: Daki A.B
Created on: Sep 2023
This module does basic math
"""

from microbit import *
from time import sleep


display.clear
sleep(1)

display.scroll("A = 3cm x 5cm = " + str(3 * 5) + display.scroll ("cm^2"))
sleep(0.5)
display.clear()

display.scroll("P = 2cm(3cm x 5cm) = " + str(2 * (3 * 5)) + display.scroll ("cm"))
sleep(0.5)
display.clear()
display.image(Image.HAPPY)

