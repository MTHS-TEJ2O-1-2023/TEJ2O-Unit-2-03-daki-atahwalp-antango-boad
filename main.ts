/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Daki A.B
 * Created on: Sep 2023
 * This program MicroBit does basic math
*/

basic.clearScreen()
basic.pause(1000)

basic.showString('A = 3cm x 5cm ='+ (3 * 5).toString() + 'cm^2')

basic.clearScreen()
basic.pause(1000)

basic.showString('P = 2cm(3cm + 5cm) =' + (2*(3 + 5)).toString() + 'cm')
basic.showIcon(IconNames.Happy)
