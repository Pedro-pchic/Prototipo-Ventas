export const roles = [
  {name:'Administrador',description:'Control total del sistema',permissions:['Usuarios','Roles','Proveedores','Inventario','Compras','Ventas','Facturación']},
  {name:'Vendedor',description:'Gestión del proceso comercial',permissions:['Ventas','Facturación','Consulta de inventario']},
  {name:'Encargado de inventario',description:'Control de existencias y abastecimiento',permissions:['Inventario','Compras','Proveedores']}
]
