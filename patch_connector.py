with open("src/components/visualizations/CustomVisuals.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# Replace the Packet component with an animated connector that includes dashed blue/green lines
old_packet = '''const Packet = ({ active, delay = 0, style }: any) => (
  <motion.div
    initial={{ left: '0%', opacity: 0.3 }}
    animate={{ left: active ? '100%' : '0%', opacity: active ? 1 : 0.3 }}
    transition={{ duration: 1.5, delay, ease: [0.4, 0, 0.2, 1] }}
    className="absolute w-3.5 h-3.5 bg-brand-blue rounded-full shadow-[0_0_12px_rgba(59,130,246,0.6)] top-1/2 -translate-y-1/2 z-20"
    style={style}
  />
);'''

new_packet = '''const Packet = ({ active, delay = 0, style }: any) => (
  <div className="absolute inset-0 z-20">
    {/* Animated dashed line overlay */}
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: active ? 1 : 0 }}
      transition={{ duration: 0.8, delay, ease: [0.4, 0, 0.2, 1] }}
      className="absolute inset-y-0 left-0 right-0 origin-left"
    >
      <div className="absolute top-1/2 -translate-y-1/2 w-full h-[2px] bg-gradient-to-r from-blue-400 to-blue-500" 
        style={{ backgroundImage: 'repeating-linear-gradient(90deg, #3b82f6 0px, #3b82f6 6px, transparent 6px, transparent 12px)' }} />
    </motion.div>
    {/* Traveling dot */}
    <motion.div
      initial={{ left: '0%', opacity: 0 }}
      animate={{ left: active ? ['0%', '100%'] : '0%', opacity: active ? [0, 1, 1, 0] : 0 }}
      transition={{ duration: 1.2, delay: delay + 0.3, ease: 'easeInOut' }}
      className="absolute w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.7)] top-1/2 -translate-y-1/2"
      style={style}
    />
    {/* Arrow tip */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: active ? 1 : 0 }}
      transition={{ duration: 0.3, delay: delay + 0.8 }}
      className="absolute right-[-3px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[7px] border-l-blue-500"
    />
  </div>
);'''

normalized = content.replace('\r\n', '\n')
if old_packet in normalized:
    normalized = normalized.replace(old_packet, new_packet)
    with open("src/components/visualizations/CustomVisuals.tsx", "w", encoding="utf-8", newline='\n') as f:
        f.write(normalized)
    print("SUCCESS - Packet component updated with dashed line + traveling dot + arrow")
else:
    print("NOT FOUND")
    idx = normalized.find("const Packet")
    if idx >= 0:
        print(repr(normalized[idx:idx+300]))
