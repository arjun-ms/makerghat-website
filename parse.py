import json

with open('figma_data_raw.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

nodes = data.get('nodes', {})
with open('figma_summary.txt', 'w', encoding='utf-8') as out:
    for node_id, node_info in nodes.items():
        document = node_info.get('document', {})
        
        def extract_info(n, indent=''):
            t = n.get('type')
            name = n.get('name', '')
            
            info = f'{indent}- [{t}] {name}'
            if t == 'TEXT':
                chars = n.get('characters', '').replace('\n', ' ')
                info += f': "{chars[:100]}"'
                style = n.get('style', {})
                font = style.get('fontFamily', '')
                weight = style.get('fontWeight', '')
                size = style.get('fontSize', '')
                info += f' (Font: {font} {weight} {size}px)'
            
            fills = n.get('fills', [])
            for fill in fills:
                if fill.get('type') == 'SOLID':
                    c = fill.get('color', {})
                    info += f' [Color: r={c.get("r", 0):.2f}, g={c.get("g", 0):.2f}, b={c.get("b", 0):.2f}]'
                elif fill.get('type') == 'IMAGE':
                    info += ' [Image]'
            
            out.write(info + '\n')
            
            for child in n.get('children', []):
                extract_info(child, indent + '  ')
                
        extract_info(document)
