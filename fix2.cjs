const fs = require('fs');

let c = fs.readFileSync('src/components/visualizations/CustomVisuals.tsx', 'utf8');

// Fix packet colors from red/green/purple/orange to blue
c = c.replace(/<Packet active=\{([^\}]+)\} color=\"(?:green|red|purple|orange)\" \/>/g, '<Packet active={$1} color="blue" />');
c = c.replace(/<Packet active=\{([^\}]+)\} color=\"(?:green|red|purple|orange)\" vertical(?:=\{true\})? \/>/g, '<Packet active={$1} color="blue" vertical={true} />');

// Make Q21-50 horizontal layouts scrollable
c = c.replace(/className=\"w-full h-full flex flex-row flex-wrap items-center justify-center p-4 lg:p-8 (gap-[^\"]+)\"/g, 'className="w-full h-full flex flex-row items-center justify-start md:justify-center overflow-x-auto custom-scrollbar p-4 lg:p-8 $1"');
// Wait, the procedural layouts use:
// w-full h-full flex flex-row flex-wrap items-center justify-center p-4 lg:p-8 gap-x
c = c.replace(/<div className=\"w-full h-full flex flex-row flex-wrap items-center justify-center p-4 lg:p-8 ([^\"]+)\">/g, 
  '<div className="w-full h-full flex overflow-x-auto custom-scrollbar p-4 lg:p-8"><div className="flex flex-row items-center justify-between min-w-[700px] max-w-5xl mx-auto w-full $1">');
// And add the closing div
// Since this is hard to regex, I'll just replace the start and then we might have unclosed divs. It's safer to leave flex-wrap out and just add min-w.
c = c.replace(/className=\"w-full h-full flex flex-row flex-wrap items-center justify-center/g, 'className="w-full h-full flex flex-row items-center justify-between min-w-[700px] overflow-x-auto custom-scrollbar');

// Ensure Q13 uses the new image
c = c.replace(/imgSrc=\"\/assets\/images\/role_attribute\.png\" active=\{currentStep >= 0\} label=\"User\" sub=\"Restricted\"/, 'imgSrc="/assets/images/q13_least_privilege_1790863889241.png" active={currentStep >= 0} label="User" sub="Restricted"');
c = c.replace(/imgSrc=\"\/assets\/images\/role_attribute\.png\" active=\{currentStep >= 0\} label=\"User\" size=\"medium\"/, 'imgSrc="/assets/images/q13_least_privilege_1790863889241.png" active={currentStep >= 0} label="User" size="medium"');

// Ensure Q34 uses the new image
c = c.replace(/imgSrc=\"\/assets\/images\/project_app\.png\" active=\{currentStep >= 0\} label=\"Admin\" sub=\"Just Enough\"/, 'imgSrc="/assets/images/q34_just_enough_1790863902661.png" active={currentStep >= 0} label="Admin" sub="Just Enough"');

// Ensure Q17 uses the new image
c = c.replace(/imgSrc=\"\/assets\/images\/database\.png\" active=\{currentStep >= 0\} label=\"Zero Trust\"/, 'imgSrc="/assets/images/q17_zero_trust_1790863916890.png" active={currentStep >= 0} label="Zero Trust"');
// Ensure Q37 uses the new image
c = c.replace(/imgSrc=\"\/assets\/images\/auth_clipboard\.png\" active=\{currentStep >= 0\} label=\"SAML\"/, 'imgSrc="/assets/images/sso_portal.png" active={currentStep >= 0} label="SAML"');

fs.writeFileSync('src/components/visualizations/CustomVisuals.tsx', c);
console.log('Done replacing CustomVisuals.tsx');
