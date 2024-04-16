function Footer({ items }) {
  let completo = items.filter((item) => item.isChecked.length);
  return (
    <div>
      <p>You have {items.length} to do{completo}</p>
      
    </div>
  )
}

export default Footer
