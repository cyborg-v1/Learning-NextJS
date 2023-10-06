async function page() {
  await new Promise((resolve, reject) => {
    setTimeout(resolve, 4000)
  })
  return (
    <div>page</div>
  )
}

export default page