export function ContactPage() {
  return (
    <section id="contact" style={{ padding: '96px 24px', backgroundColor: 'white' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '64px'
        }}>
          {/* Left - Contact Info */}
          <div>
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px',
              padding: '8px 16px',
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
              borderRadius: '9999px',
              marginBottom: '24px'
            }}>
              <span style={{ fontSize: '14px', color: '#047857', fontWeight: 500 }}>联系我们</span>
            </div>
            
            <h2 style={{ 
              fontSize: 'clamp(28px, 4vw, 40px)', 
              fontWeight: 700, 
              color: '#1c1917', 
              marginBottom: '24px',
              fontFamily: '"Noto Serif SC", serif'
            }}>
              开启孩子的康复之旅
            </h2>
            
            <p style={{ color: '#57534e', fontSize: '18px', lineHeight: 1.7, marginBottom: '40px' }}>
              我们理解您的担忧和焦虑。每一位孩子的情況都是独特的，
              欢迎预约免费咨询，让专业团队为您量身定制方案。
            </p>

            {/* Contact Methods */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ 
                  width: '56px', 
                  height: '56px', 
                  borderRadius: '16px', 
                  backgroundColor: '#d1fae5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <svg style={{ width: '28px', height: '28px', color: '#059669' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '14px', color: '#78716c', marginBottom: '4px' }}>咨询热线</div>
                  <div style={{ fontSize: '18px', fontWeight: 600, color: '#1c1917' }}>400-000-0000</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ 
                  width: '56px', 
                  height: '56px', 
                  borderRadius: '16px', 
                  backgroundColor: '#ccfbf1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <svg style={{ width: '28px', height: '28px', color: '#0d9488' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '14px', color: '#78716c', marginBottom: '4px' }}>电子邮箱</div>
                  <div style={{ fontSize: '18px', fontWeight: 600, color: '#1c1917' }}>contact@qingyuan.com</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ 
                  width: '56px', 
                  height: '56px', 
                  borderRadius: '16px', 
                  backgroundColor: '#f5f5f4',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <svg style={{ width: '28px', height: '28px', color: '#78716c' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '14px', color: '#78716c', marginBottom: '4px' }}>机构地址</div>
                  <div style={{ fontSize: '18px', fontWeight: 600, color: '#1c1917' }}>北京市朝阳区（详情咨询）</div>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div style={{ 
              backgroundColor: '#fafaf9', 
              borderRadius: '16px', 
              padding: '24px' 
            }}>
              <h4 style={{ fontWeight: 600, color: '#1c1917', marginBottom: '12px' }}>工作时间</h4>
              <p style={{ color: '#57534e', fontSize: '14px', lineHeight: 1.8 }}>
                周一至周日 9:00 - 18:00<br />
                国家法定节假日正常营业
              </p>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div style={{ 
            backgroundColor: '#fafaf9', 
            borderRadius: '24px', 
            padding: '40px' 
          }}>
            <h3 style={{ 
              fontSize: '24px', 
              fontWeight: 600, 
              color: '#1c1917', 
              marginBottom: '32px',
              textAlign: 'center'
            }}>
              在线预约咨询
            </h3>
            
            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={(e) => e.preventDefault()}>
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#1c1917', marginBottom: '8px' }}>
                  家长姓名 *
                </label>
                <input 
                  type="text" 
                  placeholder="请输入您的姓名"
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: '12px',
                    border: '1px solid #e7e5e4',
                    backgroundColor: 'white',
                    fontSize: '16px',
                    outline: 'none',
                    transition: 'border-color 0.2s'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#1c1917', marginBottom: '8px' }}>
                  联系电话 *
                </label>
                <input 
                  type="tel" 
                  placeholder="请输入您的电话号码"
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: '12px',
                    border: '1px solid #e7e5e4',
                    backgroundColor: 'white',
                    fontSize: '16px',
                    outline: 'none',
                    transition: 'border-color 0.2s'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#1c1917', marginBottom: '8px' }}>
                  孩子年龄
                </label>
                <select
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: '12px',
                    border: '1px solid #e7e5e4',
                    backgroundColor: 'white',
                    fontSize: '16px',
                    outline: 'none',
                    transition: 'border-color 0.2s'
                  }}
                >
                  <option value="">请选择孩子年龄</option>
                  <option value="12">12岁</option>
                  <option value="13">13岁</option>
                  <option value="14">14岁</option>
                  <option value="15">15岁</option>
                  <option value="16">16岁</option>
                  <option value="17">17岁</option>
                  <option value="18">18岁</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#1c1917', marginBottom: '8px' }}>
                  孩子目前状态
                </label>
                <select
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: '12px',
                    border: '1px solid #e7e5e4',
                    backgroundColor: 'white',
                    fontSize: '16px',
                    outline: 'none',
                    transition: 'border-color 0.2s'
                  }}
                >
                  <option value="">请选择孩子目前状态</option>
                  <option value="anxiety">焦虑情绪</option>
                  <option value="depression">抑郁情绪</option>
                  <option value="school-avoidance">厌学/拒学</option>
                  <option value="other">其他问题</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#1c1917', marginBottom: '8px' }}>
                  想了解的内容
                </label>
                <textarea 
                  placeholder="请简要描述您想了解的内容..."
                  rows={4}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: '12px',
                    border: '1px solid #e7e5e4',
                    backgroundColor: 'white',
                    fontSize: '16px',
                    outline: 'none',
                    resize: 'vertical',
                    transition: 'border-color 0.2s'
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '16px 32px',
                  background: 'linear-gradient(135deg, #059669 0%, #14b8a6 100%)',
                  color: 'white',
                  borderRadius: '12px',
                  fontSize: '16px',
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  marginTop: '8px'
                }}
              >
                提交预约
              </button>

              <p style={{ fontSize: '12px', color: '#78716c', textAlign: 'center' }}>
                提交后，我们的专业团队将在24小时内与您联系
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
