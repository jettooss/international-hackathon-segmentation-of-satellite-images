import cv2
import numpy as np
for i in range(8):
    #создем путь к файлу
    if i <10:
        numb = '00'+str(i)
    else:
        numb = '0'+str(i)
    path = r'D:\test\UNET\test_mask_'+numb+'.png'
    #path = path.encode('unicode_escape')
    #читаем изоюражение
    img = cv2.imread(path,0)
    path = r'D:\test\green mask\green_test_image_'+numb+'.png'
    green_mask = cv2.imread(path)
    green_mask[np.all(green_mask == (0,0,0), axis=-1)] = (1,1,1)
    green_mask[np.all(green_mask == (255,255,255), axis=-1)] = (0,0,0)
    green_mask = cv2.cvtColor(green_mask,cv2.COLOR_BGR2GRAY)
    new = img*green_mask
    
    
    #сохраняем файл
    path = r'D:\test\New Unet\test_mask_'+numb+'.png'
    isWritten = cv2.imwrite(path, new)
    if isWritten:
            print('Image is successfully saved as file.',i)

