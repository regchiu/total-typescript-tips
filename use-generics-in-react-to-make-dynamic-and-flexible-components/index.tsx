// See https://www.totaltypescript.com/tips/use-generics-in-react-to-make-dynamic-and-flexible-components

import React from 'react'

interface TableProps<TItem> {
  items: TItem[]
  renderItem: (item: TItem) => React.ReactNode
}

export function Table<TItem>(props: TableProps<TItem>) {
  return null
}

export const Component = () => {
  return (
    <Table<{ id: number, name: string }>
      items={[{ id: 1, name: 'Reg' }]}
      renderItem={(item) => <div>{item.id}</div>}
    ></Table>
  )
}
