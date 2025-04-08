import { useMainContext } from '../context/context-provider'
import { ActionDialog } from './action-dialog'

export function DialogContainer() {
  const { open, setOpen } = useMainContext()
  return (
    <>
      <ActionDialog
        key='user-add'
        open={open === 'add'}
        onOpenChange={() => setOpen('add')}
      />
    </>
  )
}
