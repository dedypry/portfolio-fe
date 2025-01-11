'use client'

import { Button, ButtonProps, Card, CardHeader, IconButton, Stack } from '@mui/material'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
// Third-party Imports
import styles from '@core/styles/table.module.css'

import { IEducation } from '@/utils/interfaces/IProfile'
import { formatDate } from '@/utils/helpers/global'
import OpenDialogOnElementClick from '@/components/dialogs/OpenDialogOnElementClick'
import EditUserInfo from '@/components/dialogs/edit-user-info'

interface Props {
  errorMsg: string
  education: IEducation[]
}
export default function EducationPage({ education, errorMsg }: Props) {
  useEffect(() => {
    if (errorMsg) {
      toast.error(errorMsg)
    }
  }, [errorMsg])

  const buttonProps: ButtonProps = {
    variant: 'contained',
    children: 'Add Education'
  }

  return (
    <Stack>
      <Card sx={{ minHeight: 'calc(100vh - 200px)' }}>
        <CardHeader
          action={<OpenDialogOnElementClick dialog={EditUserInfo} element={Button} elementProps={buttonProps} />}
          title='Education'
        />
        <div className='overflow-x-auto'>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>No</th>
                <th>Logo</th>
                <th>School</th>
                <th>Title</th>
                <th>Field</th>
                <th>IPK</th>
                <th>Start At</th>
                <th>Finish At</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {education.map((item, i) => (
                <tr key={item.id}>
                  <td>{i + 1}</td>
                  <td>{item.logo}</td>
                  <td>{item.school}</td>
                  <td>{item.title}</td>
                  <td>{item.field}</td>
                  <td>{item.ipk}</td>
                  <td>{formatDate(item.startAt)}</td>
                  <td>{formatDate(item.finishAt)}</td>
                  <td>
                    <IconButton onClick={() => console.log(item)}>
                      <i className='tabler-pencil' />
                    </IconButton>
                    <IconButton onClick={() => console.log(item)}>
                      <i className='tabler-trash' />
                    </IconButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </Stack>
  )
}
