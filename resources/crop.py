import os
from PIL import Image

def crop_images_in_directory(directory, output_size):
    cropped_images = []
    
    # Get a list of all image files in the directory
    image_files = [file for file in os.listdir(directory) if file.lower().endswith(('.jpg', '.jpeg', '.png', '.gif'))]
    
    for image_file in image_files:
        image_path = os.path.join(directory, image_file)
        image = Image.open(image_path)
        image = image.resize(output_size, Image.LANCZOS)
        
        width, height = image.size
        left = (width - output_size[0]) // 2
        top = (height - output_size[1]) // 2
        right = (width + output_size[0]) // 2
        bottom = (height + output_size[1]) // 2
        
        cropped_image = image.crop((left, top, right, bottom))
        cropped_images.append(cropped_image)
    
    return cropped_images

# Example usage
directory = './'
output_size = (500, 500)
cropped_images = crop_images_in_directory(directory, output_size)

# Save the cropped images
for i, image in enumerate(cropped_images):
    image.save(f'cropped_image{i+1}.jpg')
