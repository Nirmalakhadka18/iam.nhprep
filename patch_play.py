import re

with open("src/components/QuestionView.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# Make animation speed faster (2000 instead of 3500)
content = content.replace("3500 / speed", "2000 / speed")

# Fix Play button to restart if at the end
old_play_btn = """<button onClick={() => setIsPlaying(!isPlaying)} className="w-9 h-9 flex items-center justify-center rounded-full bg-brand-blue hover:bg-blue-700 text-white transition-colors">"""
new_play_btn = """<button onClick={() => {
                          if (currentStep >= stepCount - 1) {
                            setCurrentStep(0);
                            setIsPlaying(true);
                          } else {
                            setIsPlaying(!isPlaying);
                          }
                        }} className="w-9 h-9 flex items-center justify-center rounded-full bg-brand-blue hover:bg-blue-700 text-white transition-colors">"""

content = content.replace(old_play_btn, new_play_btn)

with open("src/components/QuestionView.tsx", "w", encoding="utf-8", newline='\n') as f:
    f.write(content)

print("SUCCESS")
