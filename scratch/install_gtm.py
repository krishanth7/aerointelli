import os
import re

GTM_HEAD = """  <!-- Google Tag Manager -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-PCLBPXPB');</script>
  <!-- End Google Tag Manager -->\n"""

GTM_BODY = """  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PCLBPXPB"
  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->\n"""

html_files = [
    'index.html',
    'about.html',
    'contact.html',
    'Technology/RAS.html',
    'legal/privacy-policy.html',
    'legal/terms-and-conditions.html',
    'legal/cookie-policy.html',
    'legal/disclaimer.html',
    'legal/refund-policy.html',
    'legal/shipping-policy.html'
]

for file_path in html_files:
    if not os.path.exists(file_path):
        print(f"Skipping missing file: {file_path}")
        continue
        
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Skip if GTM already installed
    if 'GTM-PCLBPXPB' in content:
        print(f"GTM already present in {file_path}")
        continue

    # Insert head snippet as high in <head> as possible (right after <head>)
    content = re.sub(r'(<head.*?>)', r'\1\n' + GTM_HEAD, content, count=1, flags=re.IGNORECASE)

    # Insert body snippet immediately after opening <body> tag
    content = re.sub(r'(<body.*?>)', r'\1\n' + GTM_BODY, content, count=1, flags=re.IGNORECASE)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"Successfully installed GTM in {file_path}")
