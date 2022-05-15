import Head from 'next/head'
import Button from '@mui/material/Button';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Meet Clone</title>
        <meta name="description" content="This is a clone for google meet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Button variant="contained" startIcon={<VideoCallIcon />}>
        New Meeting
      </Button>
    </div>
  )
}
