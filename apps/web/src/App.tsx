import { useState } from 'react';
import { container, title, button } from './style';

export default function App() {
  const [msg, setMsg] = useState('');

  const ping = async () => {
    try {
      const res = await fetch('/api/ping');
      if (!res || !res.ok) {
        setMsg('接口请求失败');
        return;
      }
      const data = await res.json();
      setMsg(data?.message || '接口已响应');
    } catch {
      setMsg('接口请求失败');
    }
  };

  return (
    <div className={container}>
      <div className={title}>学习首页</div>
      <div className={button} onClick={ping}>请求接口</div>
      {msg && <div style={{ marginTop: 12 }}>{msg}</div>}
    </div>
  );
}