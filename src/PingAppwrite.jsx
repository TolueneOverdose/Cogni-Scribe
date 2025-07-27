import { useEffect } from 'react';
import { account } from './appwrite';

export default function PingAppwrite() {
  useEffect(() => {
    account.get()
      .then(res => console.log("✅ Appwrite Connected:", res))
      .catch(err => console.warn("⚠️ Appwrite Connected but no session:", err.message));
  }, []);

  return <button>Ping Sent — Check Console</button>;
}
