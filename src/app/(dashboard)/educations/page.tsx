import { getServerSession } from 'next-auth'

import { authOptions } from '@/libs/auth'
import EducationPage from '@/views/educations'
import { http } from '@/libs/axios'

export default async function Page() {
  const session = await getServerSession(authOptions)

  let educations = []
  let errorMsg = null

  try {
    const { data } = await http.get('/educations', {
      headers: {
        Authorization: 'Bearer ' + session?.token
      }
    })

    educations = data
  } catch (error: any) {
    console.error(error)
    errorMsg = error?.response?.data?.message
  }

  return <EducationPage education={educations} errorMsg={errorMsg} />
}
