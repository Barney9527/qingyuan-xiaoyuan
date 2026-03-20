export function HomePage() {
  return (
    <section id="home" style={{ minHeight: '100vh', padding: '60px 0' }}>
      {/* Hero Section */}
      <div style={{ 
        background: 'linear-gradient(135deg, #ecfdf5 0%, #f0fdf4 50%, #fafaf9 100%)',
        minHeight: 'calc(100vh - 140px)'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            alignItems: 'center', 
            gap: '60px',
            paddingTop: '40px'
          }}>
            
            {/* Left Column - Text */}
            <div style={{ flex: '1 1 500px' }}>
              {/* Badge */}
              <div style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px',
                padding: '8px 16px',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                borderRadius: '9999px',
                marginBottom: '32px'
              }}>
                <span style={{ width: '8px', height: '8px', backgroundColor: '#10b981', borderRadius: '50%', animation: 'pulse 2s infinite' }} />
                <span style={{ fontSize: '14px', color: '#047857', fontWeight: 500 }}>新起点教育集团旗下品牌</span>
              </div>
              
              <h1 style={{ 
                fontSize: 'clamp(32px, 5vw, 56px)', 
                fontWeight: 700, 
                color: '#1c1917', 
                lineHeight: 1.2, 
                marginBottom: '32px',
                fontFamily: '"Noto Serif SC", serif'
              }}>
                给心灵疲惫的孩子
                <br />
                <span style={{ 
                  background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>一个休息与修复的空间</span>
              </h1>
              
              <p style={{ 
                fontSize: '18px', 
                color: '#57534e', 
                marginBottom: '32px', 
                lineHeight: 1.7,
                maxWidth: '540px'
              }}>
                清源小院是居住式心理疗愈中心，依托精神科专家、心理学家、教育专家组成的专业团队，
                融合<strong style={{ color: '#059669' }}>医疗级危机干预</strong>、<strong style={{ color: '#059669' }}>专业心理咨询</strong>、<strong style={{ color: '#059669' }}>赋能课程</strong>三大核心能力。
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '48px' }}>
                <a
                  href="#contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '16px 32px',
                    background: 'linear-gradient(135deg, #059669 0%, #14b8a6 100%)',
                    color: 'white',
                    borderRadius: '9999px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    transition: 'all 0.3s'
                  }}
                >
                  预约免费咨询
                  <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="#services"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '16px 32px',
                    border: '2px solid #e7e5e4',
                    color: '#57534e',
                    borderRadius: '9999px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    transition: 'all 0.3s'
                  }}
                >
                  了解服务
                </a>
              </div>

              {/* Stats */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px' }}>
                <div>
                  <div style={{ fontSize: '30px', fontWeight: 700, color: '#1c1917' }}>12-18岁</div>
                  <div style={{ color: '#78716c', fontSize: '14px' }}>招收年龄段</div>
                </div>
                <div style={{ width: '1px', height: '48px', backgroundColor: '#e7e5e4' }} />
                <div>
                  <div style={{ fontSize: '30px', fontWeight: 700, color: '#1c1917' }}>专业团队</div>
                  <div style={{ color: '#78716c', fontSize: '14px' }}>医疗+心理+教育</div>
                </div>
                <div style={{ width: '1px', height: '48px', backgroundColor: '#e7e5e4' }} />
                <div>
                  <div style={{ fontSize: '30px', fontWeight: 700, color: '#1c1917' }}>三大模式</div>
                  <div style={{ color: '#78716c', fontSize: '14px' }}>住宿/走读/专项</div>
                </div>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative', width: '100%', maxWidth: '400px', aspectRatio: '1' }}>
                {/* Main card */}
                <div style={{ 
                  width: '100%', 
                  height: '100%', 
                  background: 'linear-gradient(135deg, #d1fae5 0%, #f0fdf4 50%, #f5f5f4 100%)',
                  borderRadius: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 20px 40px -8px rgba(5, 150, 105, 0.12)'
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ 
                      width: '128px', 
                      height: '128px', 
                      margin: '0 auto', 
                      borderRadius: '50%', 
                      background: 'linear-gradient(135deg, #34d399 0%, #14b8a6 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                    }}>
                      <span style={{ color: 'white', fontSize: '48px', fontFamily: '"Noto Serif SC", serif' }}>清</span>
                    </div>
                    <p style={{ marginTop: '24px', color: '#57534e', fontSize: '20px', fontFamily: '"Noto Serif SC", serif' }}>澄心明性 · 思源致远</p>
                  </div>
                </div>
                
                {/* Floating cards */}
                <div style={{ 
                  position: 'absolute', 
                  top: '-16px', 
                  right: '-16px', 
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(8px)',
                  padding: '16px',
                  borderRadius: '16px',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ 
                      width: '40px', 
                      height: '40px', 
                      borderRadius: '50%', 
                      backgroundColor: '#d1fae5',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <svg style={{ width: '20px', height: '20px', color: '#059669' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <span style={{ fontSize: '14px', fontWeight: 500, color: '#1c1917' }}>安全与恢复</span>
                  </div>
                </div>

                <div style={{ 
                  position: 'absolute', 
                  bottom: '-16px', 
                  left: '-16px', 
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(8px)',
                  padding: '16px',
                  borderRadius: '16px',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ 
                      width: '40px', 
                      height: '40px', 
                      borderRadius: '50%', 
                      backgroundColor: '#ccfbf1',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <svg style={{ width: '20px', height: '20px', color: '#0d9488' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <span style={{ fontSize: '14px', fontWeight: 500, color: '#1c1917' }}>优势视角</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section style={{ padding: '96px 24px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ 
              fontSize: 'clamp(28px, 4vw, 40px)', 
              fontWeight: 700, 
              color: '#1c1917', 
              marginBottom: '16px',
              fontFamily: '"Noto Serif SC", serif'
            }}>专业团队 · 全面守护</h2>
            <p style={{ color: '#57534e', fontSize: '18px', maxWidth: '640px', margin: '0 auto' }}>
              依托新起点教育集团专业团队，融合医疗、心理、教育三大领域
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '32px' 
          }}>
            {[
              {
                icon: (
                  <svg style={{ width: '32px', height: '32px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: '医疗级危机干预',
                desc: '精神科专家团队，具备专业医疗资质，提供安全保障'
              },
              {
                icon: (
                  <svg style={{ width: '32px', height: '32px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                title: '专业心理咨询',
                desc: '资深心理咨询师，提供个性化心理辅导与治疗方案'
              },
              {
                icon: (
                  <svg style={{ width: '32px', height: '32px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
                title: '赋能成长课程',
                desc: '多元化课程体系，激发内在动力，重建成长信心'
              }
            ].map((item, i) => (
              <div key={i} style={{ 
                backgroundColor: '#fafaf9', 
                borderRadius: '24px', 
                padding: '32px',
                transition: 'all 0.3s'
              }}>
                <div style={{ 
                  width: '64px', 
                  height: '64px', 
                  backgroundColor: '#d1fae5', 
                  borderRadius: '16px', 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#059669',
                  marginBottom: '24px'
                }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#1c1917', marginBottom: '12px' }}>{item.title}</h3>
                <p style={{ color: '#57534e', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section style={{ padding: '96px 24px', backgroundColor: '#f5f5f4' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '64px',
            alignItems: 'center'
          }}>
            <div>
              <h2 style={{ 
                fontSize: 'clamp(28px, 4vw, 40px)', 
                fontWeight: 700, 
                color: '#1c1917', 
                marginBottom: '24px',
                fontFamily: '"Noto Serif SC", serif'
              }}>
                我们的使命
              </h2>
              <p style={{ color: '#57534e', fontSize: '18px', lineHeight: 1.7, marginBottom: '32px' }}>
                给心灵疲惫的孩子一个休息与修复的空间，帮助他们看见彼此、获得成长、找到意义，走向一个幸福的人生。
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ 
                    width: '32px', 
                    height: '32px', 
                    borderRadius: '50%', 
                    backgroundColor: '#d1fae5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '4px'
                  }}>
                    <svg style={{ width: '16px', height: '16px', color: '#059669' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p style={{ color: '#57534e' }}>安全与恢复为主，强调优势视角</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ 
                    width: '32px', 
                    height: '32px', 
                    borderRadius: '50%', 
                    backgroundColor: '#d1fae5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '4px'
                  }}>
                    <svg style={{ width: '16px', height: '16px', color: '#059669' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p style={{ color: '#57534e' }}>在尊重、信任的关系中支持孩子</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ 
                    width: '32px', 
                    height: '32px', 
                    borderRadius: '50%', 
                    backgroundColor: '#d1fae5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '4px'
                  }}>
                    <svg style={{ width: '16px', height: '16px', color: '#059669' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p style={{ color: '#57534e' }}>帮助孩子恢复心理社会功能</p>
                </div>
              </div>
            </div>
            <div style={{ 
              background: 'linear-gradient(135deg, #d1fae5 0%, #f0fdf4 100%)', 
              borderRadius: '24px', 
              padding: '48px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '64px', marginBottom: '24px' }}>🌱</div>
              <h3 style={{ 
                fontSize: '24px', 
                fontWeight: 700, 
                color: '#1c1917', 
                marginBottom: '16px',
                fontFamily: '"Noto Serif SC", serif'
              }}>澄心明性 · 思源致远</h3>
              <p style={{ color: '#57534e' }}>通过内省与修养，以清明之心抵达自我认知的深度</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" style={{ 
        padding: '96px 24px', 
        background: 'linear-gradient(135deg, #059669 0%, #0d9488 100%)' 
      }}>
        <div style={{ maxWidth: '768px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ 
            fontSize: 'clamp(28px, 4vw, 40px)', 
            fontWeight: 700, 
            color: 'white', 
            marginBottom: '24px',
            fontFamily: '"Noto Serif SC", serif'
          }}>
            让孩子重获成长的力量
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '18px', marginBottom: '32px', maxWidth: '512px', margin: '0 auto 32px' }}>
            我们理解您的担忧，欢迎预约免费咨询，让专业团队为您的孩子制定个性化方案
          </p>
          <a
            href="tel:400-000-0000"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '16px 32px',
              backgroundColor: 'white',
              color: '#059669',
              borderRadius: '9999px',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'all 0.3s'
            }}
          >
            <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            立即预约咨询
          </a>
        </div>
      </section>
    </section>
  );
}
