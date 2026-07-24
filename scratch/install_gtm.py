import os
import re

GTM_HEAD = """  <!-- Google Tag Manager -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-PCLBPXPB');</script>
  <!-- End Google Tag Manager -->

  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=GTM-PCLBPXPB"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'GTM-PCLBPXPB');
  </script>
  <!-- End Google tag (gtag.js) -->\n"""

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

    # Remove previous GTM insertions if any
    content = re.sub(r'<!-- Google Tag Manager -->.*?<!-- End Google Tag Manager -->\s*', '', content, flags=re.DOTALL)
    content = re.sub(r'<!-- Google tag \(gtag\.js\) -->.*?<!-- End Google tag \(gtag\.js\) -->\s*', '', content, flags=re.DOTALL)
    content = re.sub(r'<!-- Google Tag Manager \(noscript\) -->.*?<!-- End Google Tag Manager \(noscript\) -->\s*', '', content, flags=re.DOTALL)

    # Ensure <meta charset="UTF-8"> comes immediately after <head>
    # Insert GTM_HEAD immediately after <meta name="viewport"...> or after charset
    if '<meta charset="UTF-8">' in content:
        content = re.sub(r'(<meta charset="UTF-8">.*?\n)', r'\1' + GTM_HEAD, content, count=1, flags=re.IGNORECASE)
    else:
        content = re.sub(r'(<head.*?>\n)', r'\1' + GTM_HEAD, content, count=1, flags=re.IGNORECASE)

    # Insert GTM_BODY immediately after opening <body> tag
    content = re.sub(r'(<body.*?>)', r'\1\n' + GTM_BODY, content, count=1, flags=re.IGNORECASE)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"Updated Google Tag in {file_path}")
