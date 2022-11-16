import { withAppPath } from '@app/utils'

export const attachments = [
  { label: 'Resume in pdf format', name: 'Adam_Torcato.pdf', href: withAppPath('/resume/Adam_Torcato.pdf'), type: 'pdf' },
  { label: 'Resume in word format', name: 'Adam_Torcato.docx', href: withAppPath('/resume/Adam_Torcato.docx'), type: 'docx' },
]
