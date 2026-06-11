#!/bin/bash

# WorkOS Asset Download Script
# Downloads key images and assets from WorkOS CDN

# Create directories
mkdir -p public/images/products
mkdir -p public/images/logos
mkdir -p public/images/sections
mkdir -p public/images/customers
mkdir -p public/seo

# Product icons
curl -s -o public/images/products/um.png "https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/656545520bd5f04e20a3a6a7_um.png"
curl -s -o public/images/products/sso.png "https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/63e1062ae62bc2260203e96f_icon-sso.png"
curl -s -o public/images/products/radar.png "https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/673b4ed27842047837086d7a_icon-radar-nav.png"
curl -s -o public/images/products/authkit.png "https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/65654341bfdb733f6715f944_authkit.png"
curl -s -o public/images/products/directory-sync.png "https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/63e10629cdacaa53e05c2a95_icon-directory-sync.png"
curl -s -o public/images/products/rbac.png "https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/68752d3fceb13184116f219f_icon-rbac.png"
curl -s -o public/images/products/mcp-auth.png "https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/68c8802359b1c7df06378d44_icon-mcp-auth.png"
curl -s -o public/images/products/admin-portal.png "https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/63e1062a21fa47cd37a717f5_icon-admin-portal.png"
curl -s -o public/images/products/vault.png "https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/67daf11719d8c412f176a3d4_icon-vault.png"
curl -s -o public/images/products/social-auth.png "https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/6560b853025aee8784246561_social-icon.png"
curl -s -o public/images/products/magic-link.png "https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/64cd1a29bcc1ade00cb6512a_icon-magic-link.png"
curl -s -o public/images/products/mfa.png "https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/63e25132f3d2d0e80db83c38_icon-mfa.png"

# Hero and section images
curl -s -o public/images/sections/hero-pattern.avif "https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/69a167cbb4fc5655a9de2b90_hero-pattern.avif"
curl -s -o public/images/sections/stack-1.png "https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/6564a28f8383f05a0258710a_stack-1.png"
curl -s -o public/images/sections/stack-2.png "https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/6564a28e65b11547f77d44b1_stack-2.png"
curl -s -o public/images/sections/stack-3.png "https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/6564a28ef5f83b338c316063_stack-3.png"
curl -s -o public/images/sections/circuit-top.png "https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/62723a9e2f75a49275ec2c97_circuit-top.png"
curl -s -o public/images/sections/circuit-bottom.png "https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/6226192ae8794e89d2b5c669_circuit-bottom.png"
curl -s -o public/images/sections/circuit-lines-top.png "https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/6231f2bb5204dfd7354a4b57_circuit-top-looping-lines.png"
curl -s -o public/images/sections/circuit-lines-bottom.png "https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/6231d0a899cd495a6bf97442_bottom%20looping%20lines.png"
curl -s -o public/images/sections/chip-logo.png "https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/622605f9d95f62a4e94c388e_chip-logo.png"
curl -s -o public/images/sections/scim-provisioning.png "https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/622220b9065f1eb94576fe29_scim-provisioning.png"
curl -s -o public/images/sections/hris-integration.png "https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/622220b4926e7f1a0c030902_hris-integration.png"
curl -s -o public/images/sections/admin-portal-setup.png "https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/62222908926e7fca62036998_admin-portal-setup.png"
curl -s -o public/images/sections/video-thumb.png "https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/670ea3d63b3c0c86505191ed_Homepage%20Thumb.png"
curl -s -o public/images/sections/clay-logo.png "https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/6892d2e5181241ef6a5df6f4_clay-logo.png"

# Logos (SVG)
curl -s -o public/images/logos/okta.svg "https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/622610791d139d5f9560c0e7_Okta.svg"
curl -s -o public/images/logos/azure.svg "https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/62261079c6071166101e2458_Azure.svg"
curl -s -o public/images/logos/google.svg "https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/622610785b080383cba6bfa0_Google.svg"
curl -s -o public/images/logos/saml.svg "https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/622610798c6a0efd077814de_SAML.svg"
curl -s -o public/images/logos/onelogin.svg "https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/622610792c2519cf3e8e29aa_OneLogin.svg"
curl -s -o public/images/logos/adfs.svg "https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/622610785016cdeb8d133aee_adfs.svg"
curl -s -o public/images/logos/bamboohr.svg "https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/62261079c74d692501880eec_BambooHR.svg"
curl -s -o public/images/logos/jumpcloud.svg "https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/622610795dfe681647e7d088_JumpCloud.svg"
curl -s -o public/images/logos/pingidentity.svg "https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/62261079f0c5032048e59b9d_Ping%20identity.svg"
curl -s -o public/images/logos/openid.svg "https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/6226107951b5d91dea55a4cb_OpenID.svg"
curl -s -o public/images/logos/duo.svg "https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/62261078fc2415bae9d26ff0_DUO.svg"

# Customer logos
curl -s -o public/images/customers/vercel.svg "https://cdn.prod.website-files.com/621f84dc15b5ed16dc85a18a/624468a7c2b41c814c45842f_vercel%20logo.svg"
curl -s -o public/images/customers/openai.svg "https://cdn.prod.website-files.com/621f84dc15b5ed16dc85a18a/69a1ff8ece2f0514207b1835_openai.svg"

# Favicons
curl -s -o public/seo/favicon.png "https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/621f548d3bca3b62c4bfe1c2_Favicon%2032x32.png"
curl -s -o public/seo/apple-touch-icon.png "https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/621f549024eb2947f6f2f7f7_Favicon%20256x256.png"

echo "Asset download complete!"
echo "Images saved to public/images/"
echo "Favicons saved to public/seo/"
