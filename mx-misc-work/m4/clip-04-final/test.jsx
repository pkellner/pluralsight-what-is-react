function ServerComponent() {

  await sql.connect(sqlConfig)
  const results =
    await sql.query`select id,name from mytable`

  return (
    <ul>
      {
        results.map(rec => {
          return (
            <li key={rec.id}>{rec.name}</li>
          )
        })
      }
    </ul>
  )
} 