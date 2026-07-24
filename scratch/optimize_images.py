import os
from PIL import Image

def optimize_directory(dir_path):
    print(f"Optimizing images in {dir_path}...")
    for filename in os.listdir(dir_path):
        filepath = os.path.join(dir_path, filename)
        if filename.endswith(('.png', '.jpg', '.jpeg')) and not filename.endswith('.webp'):
            base_name, _ = os.path.splitext(filename)
            webp_path = os.path.join(dir_path, f"{base_name}.webp")
            
            with Image.open(filepath) as img:
                orig_size = os.path.getsize(filepath)
                
                # Convert & save as WebP
                if img.mode in ("RGBA", "P"):
                    # Check if alpha is used
                    alpha = img.convert('RGBA').split()[-1]
                    if alpha.getextrema() == (255, 255):
                        # No transparency
                        rgb_img = img.convert('RGB')
                        rgb_img.save(webp_path, 'WEBP', quality=82, method=6)
                    else:
                        img.save(webp_path, 'WEBP', quality=82, method=6)
                else:
                    img.convert('RGB').save(webp_path, 'WEBP', quality=82, method=6)
                
                webp_size = os.path.getsize(webp_path)
                print(f"  {filename}: {orig_size/1024:.1f} KB -> {base_name}.webp: {webp_size/1024:.1f} KB ({(1 - webp_size/orig_size)*100:.1f}% savings)")

                # Also overwrite PNG/JPG with optimized version for fallback
                if filename.endswith('.png'):
                    if img.mode in ("RGBA", "P"):
                        alpha = img.convert('RGBA').split()[-1]
                        if alpha.getextrema() == (255, 255):
                            img.convert('RGB').save(filepath, 'JPEG', quality=82, optimize=True)
                        else:
                            img.save(filepath, 'PNG', optimize=True)
                    else:
                        img.convert('RGB').save(filepath, 'JPEG', quality=82, optimize=True)
                elif filename.endswith(('.jpg', '.jpeg')):
                    img.convert('RGB').save(filepath, 'JPEG', quality=82, optimize=True)

optimize_directory('assets')
optimize_directory('public/assets')
