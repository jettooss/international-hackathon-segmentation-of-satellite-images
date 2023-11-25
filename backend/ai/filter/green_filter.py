import cv2
import numpy as np



path = r'D:\test\images\test_image_007.png'

img = cv2.imread(path)



hsv_min = np.array((43, 54, 14), np.uint8)
hsv_max = np.array((121, 252, 255), np.uint8)

hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV )
thresh = cv2.inRange(hsv, hsv_min, hsv_max)


path = r'D:\test\green mask\green_test_image_007.png'

isWritten = cv2.imwrite(path, thresh)
