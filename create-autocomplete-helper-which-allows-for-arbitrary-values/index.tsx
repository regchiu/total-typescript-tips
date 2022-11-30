// See: https://www.totaltypescript.com/tips/create-autocomplete-helper-which-allows-for-arbitrary-values
import React from 'react'

type IconSize = LooseAutocomplete<'sm' | 'xs'>

type LooseAutocomplete<T extends string> = T | Omit<string, T>

interface IconProps {
  size: IconSize
}

export const Icon = (props: IconProps) => {
  return <></>
}

const Component = () => {
  return (
    <>
      <Icon size='xs'></Icon>
      <Icon size='xs'></Icon>
    </>
  )
}
