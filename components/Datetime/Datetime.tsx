import { format, parseISO } from 'date-fns'
import React from 'react'

type Props = {
  dateString: string
}

export const Datetime = ({ dateString }: Props) => {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'yyyy-MM-dd')}</time>
}
