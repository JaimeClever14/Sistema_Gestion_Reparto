import os
import re

entity_dir = r'C:\Users\AMD\Desktop\WebRomaPedidos\src\main\java\com\AppPedidos\WebRomaPedidos\domain\entity'

for filename in os.listdir(entity_dir):
    if not filename.endswith('.java'):
        continue
        
    filepath = os.path.join(entity_dir, filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Replace String estado
    # Sometimes it has @Column(length=1) or something above it. Let's look for private String estado; and replace its block.
    # It's safer to remove @Column(...) above it if it relates to estado.
    content = re.sub(r'(@Column\([^)]*\)\s*)?private String estado;', 
                     r'@Column(columnDefinition = "BIT")\n    private Boolean activo = true;', 
                     content)
                     
    # Update fecha_registro and add fecha_modificacion
    # Match:
    # @Column(name = "fecha_registro")
    # private LocalDateTime fechaRegistro;
    
    # First, let's normalize existing @Column(name = "fecha_registro")
    content = re.sub(r'@Column\(name\s*=\s*"fecha_registro"[^)]*\)\s*private LocalDateTime fechaRegistro;',
                     r'@Column(name = "fecha_registro", columnDefinition = "DATETIME2(0)")\n    private LocalDateTime fechaRegistro;\n\n    @Column(name = "fecha_modificacion", columnDefinition = "DATETIME2(0)")\n    private LocalDateTime fechaModificacion;',
                     content)
                     
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
        
print('Terminado')
