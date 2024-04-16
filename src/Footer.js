function Footer({ items }) {
  let completo = items.filter((items) => items.isChecked.length);

  let completorio = items.filter((item) => item.isChecked.length);
  return (
    <div>
      <p>You have {items.length} thing/s to get, Don't forget the strawberry milk.{}</p>
      
    </div>
  )
}

export default Footer
