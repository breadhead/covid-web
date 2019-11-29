import * as React from 'react';
import { Button, ButtonKind } from '@app/src/ui/button';

interface DetailTableProps {
  setCurrent: (value: null) => void
}

export const DetailTable = ({ setCurrent }: DetailTableProps) => {
  return (<div>

    <Button
      kind={ButtonKind.Secondary}
      onClick={() => {
        setCurrent(null)
      }}>Ко всем врачам</Button>

    detail table
  </div>)
}
