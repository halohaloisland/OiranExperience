import os
import json

# Configuration
GALLERY_DIR = 'assets/images/gallery'
OUTPUT_FILE = 'gallery.json'
EXTENSIONS = {'.jpg', '.jpeg', '.png', '.gif', '.webp'}

def update_gallery():
    # Get the absolute path to the gallery directory
    current_dir = os.path.dirname(os.path.abspath(__file__))
    gallery_path = os.path.join(current_dir, GALLERY_DIR)

    # Check if directory exists
    if not os.path.exists(gallery_path):
        print(f"Error: Directory '{GALLERY_DIR}' not found.")
        return

    # List image files
    images = []
    for filename in sorted(os.listdir(gallery_path)):
        if any(filename.lower().endswith(ext) for ext in EXTENSIONS):
            # Create relative path for web use
            filesrouce = os.path.join(GALLERY_DIR, filename)
            images.append({
                "src": filesrouce,
                "alt": "Oiran Experience Gallery Image"
            })

    # Write to JS file (for local file access compatibility)
    output_file = 'gallery_data.js'
    
    with open(output_file, 'w', encoding='utf-8') as f:
        # Write as a JavaScript constant
        f.write("const galleryData = ")
        json.dump(images, f, indent=4, ensure_ascii=False)
        f.write(";")
        
    print(f"Success! Updated '{output_file}' with {len(images)} images.")

if __name__ == '__main__':
    update_gallery()
