import { withAppPath } from '@app/utils'

export const attachments = [
  { label: 'Resume in pdf format', name: 'Richard_Torcato.pdf', href: withAppPath('/resume/Richard_Torcato.pdf'), type: 'pdf' },
  { label: 'Resume in word format', name: 'Richard_Torcato.docx', href: withAppPath('/resume/Richard_Torcato.docx'), type: 'docx' },
]
