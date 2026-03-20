export function Footer() {
  return (
    <footer style={{ 
      backgroundColor: '#1c1917', 
      color: '#a8a29e',
      padding: '64px 24px 32px'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '48px',
          marginBottom: '48px'
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ 
                width: '48px', 
                height: '48px', 
                borderRadius: '12px', 
                background: 'linear-gradient(135deg, #34d399 0%, #14b8a6 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ color: 'white', fontSize: '24px', fontFamily: '"Noto Serif SC", serif' }}>清</span>
              </div>
              <div>
                <span style={{ fontSize: '20px', fontWeight: 600, color: 'white' }}>清源小院</span>
                <div style={{ fontSize: '12px', color: '#78716c' }}>QINGYUAN</div>
              </div>
            </div>
            <p style={{ fontSize: '14px', lineHeight: 1.7 }}>
              给心灵疲惫的孩子一个休息与修复的空间，帮助他们看见彼此、获得成长、找到意义。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontWeight: 600, color: 'white', marginBottom: '20px' }}>快速链接</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><a href="#home" style={{ color: '#a8a29e', textDecoration: 'none', fontSize: '14px' }}>首页</a></li>
              <li><a href="#about" style={{ color: '#a8a29e', textDecoration: 'none', fontSize: '14px' }}>关于我们</a></li>
              <li><a href="#services" style={{ color: '#a8a29e', textDecoration: 'none', fontSize: '14px' }}>服务项目</a></li>
              <li><a href="#contact" style={{ color: '#a8a29e', textDecoration: 'none', fontSize: '14px' }}>联系我们</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontWeight: 600, color: 'white', marginBottom: '20px' }}>服务项目</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li style={{ fontSize: '14px' }}>住宿制服务</li>
              <li style={{ fontSize: '14px' }}>日间走读制</li>
              <li style={{ fontSize: '14px' }}>专项心理服务</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontWeight: 600, color: 'white', marginBottom: '20px' }}>联系我们</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                400-000-0000
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contact@qingyuan.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ 
          borderTop: '1px solid #292524', 
          paddingTop: '24px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px'
        }}>
          <p style={{ fontSize: '14px' }}>
            © 2024 清源小院. 新起点教育集团旗下品牌. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#" style={{ fontSize: '14px', color: '#78716c', textDecoration: 'none' }}>隐私政策</a>
            <a href="#" style={{ fontSize: '14px', color: '#78716c', textDecoration: 'none' }}>服务条款</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
