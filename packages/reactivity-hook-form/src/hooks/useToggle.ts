import { useState } from 'react';

type VoidFunction = () => void;

export type ReturnUseToggle = [
  boolean,
  { onVisible: VoidFunction; onHidden: VoidFunction },
  VoidFunction
];

export default function useToggle(
  initialValue: boolean | (() => boolean) = false
): ReturnUseToggle {
  const [open, setOpen] = useState(initialValue);

  const onToggle = () => setOpen((prev) => !prev);

  const onVisible = () => setOpen(true);

  const onHidden = () => setOpen(false);

  return [open, { onHidden, onVisible }, onToggle];
}
