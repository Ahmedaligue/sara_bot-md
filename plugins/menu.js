import%20fs%20from%20'fs'%0Aimport%20fetch%20from%20'node-fetch'%0Aimport%20%7B%20xpRange%20%7D%20from%20'..%2Flib%2Flevelling.js'%0Aconst%20%7B%20levelling%20%7D%20%3D%20'..%2Flib%2Flevelling.js'%0Aimport%20PhoneNumber%20from%20'awesome-phonenumber'%0Aimport%20%7B%20promises%20%7D%20from%20'fs'%0Aimport%20%7B%20join%20%7D%20from%20'path'%0Alet%20handler%20%3D%20async%20(m%2C%20%7B%20conn%2C%20usedPrefix%2C%20usedPrefix%3A%20_p%2C%20__dirname%2C%20text%2C%20isPrems%20%7D)%20%3D%3E%20%7B%0Atry%20%7B%0Alet%20vn%20%3D%20'.%2FMenu.png'%0Alet%20pp%20%3D%20imagen4%0Alet%20img%20%3D%20await(await%20fetch('https%3A%2F%2Ftelegra.ph%2F.')).buffer()%0Alet%20d%20%3D%20new%20Date(new%20Date%20%2B%203600000)%0Alet%20locale%20%3D%20'ar'%0Alet%20week%20%3D%20d.toLocaleDateString(locale%2C%20%7B%20weekday%3A%20'long'%20%7D)%0Alet%20date%20%3D%20d.toLocaleDateString(locale%2C%20%7B%20day%3A%20'numeric'%2C%20month%3A%20'long'%2C%20year%3A%20'numeric'%20%7D)%0Alet%20_uptime%20%3D%20process.uptime()%20*%201000%0Alet%20uptime%20%3D%20clockString(_uptime)%0Alet%20user%20%3D%20global.db.data.users%5Bm.sender%5D%0Alet%20%7B%20money%2C%20joincount%20%7D%20%3D%20global.db.data.users%5Bm.sender%5D%0Alet%20%7B%20exp%2C%20limit%2C%20level%2C%20role%20%7D%20%3D%20global.db.data.users%5Bm.sender%5D%0Alet%20%7B%20min%2C%20xp%2C%20max%20%7D%20%3D%20xpRange(level%2C%20global.multiplier)%0Alet%20rtotalreg%20%3D%20Object.values(global.db.data.users).filter(user%20%3D%3E%20user.registered%20%3D%3D%20true).length%20%0Alet%20more%20%3D%20String.fromCharCode(8206)%0Alet%20readMore%20%3D%20more.repeat(850)%20%20%20%0Alet%20taguser%20%3D%20'%40'%20%2B%20m.sender.split(%22%40s.whatsapp.net%22)%5B0%5D%0Alet%20str%20%3D%20%60*%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%20%D8%A8%D9%83%20%D9%81%D9%8A%20%F0%9D%9A%83%F0%9D%99%B7%F0%9D%99%B4_%F0%9D%99%BB%F0%9D%99%B8%F0%9D%99%B6%F0%9D%99%B7%F0%9D%9A%83_%F0%9D%99%B1%F0%9D%99%BE%F0%9D%9A%83*%0A*%E2%8E%94%20%E2%8B%85%20%E2%94%80%E2%94%80%E2%94%80%E2%94%81%20%E2%80%A2%EF%B9%9D%F0%9F%91%91%EF%B9%9E%E2%80%A2%20%E2%94%81%E2%94%80%E2%94%80%E2%94%80%20%E2%8B%85%20%E2%8E%94*%0A*%D9%85%D9%86%D9%88%D8%B1%20%D9%8A%D8%A7%D9%82%D9%84%D8%A8%20%D9%84%D8%A7%D9%8A%D8%AA%20%E2%9A%A1%F0%9F%8E%8C*%0A*%D8%A7%D9%84%D8%A8%D9%88%D8%AA%20%D8%AA%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D9%8A%20%D9%85%D9%85%D9%84%D9%83%D8%A9%20%D8%B3%D8%A8%D9%8A%D8%AF%20%D8%A7%D9%84%D8%B9%D8%B1%D9%8A%D9%82%D8%A9%20%E2%9A%9C%EF%B8%8F*%0A*%E2%8E%94%20%E2%8B%85%20%E2%94%80%E2%94%80%E2%94%80%E2%94%81%20%E2%80%A2%EF%B9%9D%F0%9F%91%91%EF%B9%9E%E2%80%A2%20%E2%94%81%E2%94%80%E2%94%80%E2%94%80%20%E2%8B%85%20%E2%8E%94*%0A%E2%8C%AC%20%D8%AA%D9%80%D9%80%E2%9C%8D%EF%B8%8E%D9%80%D9%80%D9%88%D9%82%D9%80%D9%80%D9%8A%D9%80%D9%80%D8%B9%20%E2%86%A1%F0%9F%96%8B%EF%B8%8F%0A%E3%80%8E%E2%9A%9C%EF%B8%8F%F0%9D%90%92%F0%9D%90%A9%F0%9D%90%9E%F0%9D%90%9E%F0%9D%90%9D%20%E2%8A%B0%F0%9F%90%89%E2%8A%B1%20%F0%9D%90%8A%F0%9D%90%A2%F0%9D%90%A7%F0%9D%90%A0%F0%9D%90%9D%F0%9D%90%A8%F0%9D%90%A6%E2%9A%9C%EF%B8%8F%E3%80%8F%0A*%E2%8E%94%20%E2%8B%85%20%E2%94%80%E2%94%80%E2%94%80%E2%94%81%20%E2%80%A2%EF%B9%9D%F0%9F%91%91%EF%B9%9E%E2%80%A2%20%E2%94%81%E2%94%80%E2%94%80%E2%94%80%20%E2%8B%85%20%E2%8E%94*%0A*%F0%9F%91%91%F0%9D%9A%83%F0%9D%99%B7%F0%9D%99%B4_%F0%9D%99%BB%F0%9D%99%B8%F0%9D%99%B6%F0%9D%99%B7%F0%9D%9A%83_%F0%9D%99%B1%F0%9D%99%BE%F0%9D%9A%83%F0%9F%91%91*%0A*%E2%8E%94%20%E2%8B%85%20%E2%94%80%E2%94%80%E2%94%80%E2%94%81%20%E2%80%A2%EF%B9%9D%F0%9F%91%91%EF%B9%9E%E2%80%A2%20%E2%94%81%E2%94%80%E2%94%80%E2%94%80%20%E2%8B%85%20%E2%8E%94*%0A*%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D9%85%D8%B7%D9%88%D8%B1%20%D9%8A%D8%A7%D8%A8%D8%B1%D9%88%20%E2%9A%A1%F0%9F%A4%96*%0A*%E2%8E%94%20%E2%8B%85%20%E2%94%80%E2%94%80%E2%94%80%E2%94%81%20%E2%80%A2%EF%B9%9D%F0%9F%91%91%EF%B9%9E%E2%80%A2%20%E2%94%81%E2%94%80%E2%94%80%E2%94%80%20%E2%8B%85%20%E2%8E%94*%0A%F0%9F%91%BE%E2%94%91%E2%94%81%E2%94%81%E2%94%81%D9%87%D8%A7%D8%B1%D9%84%D9%8A%20%D9%84%D8%A7%D9%8A%D8%AA%E2%94%81%E2%94%81%E2%94%81%E2%94%8D%F0%9F%91%BE%0A*%E2%9D%97%E2%87%86%20%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D9%80%D9%85%D8%B7%D9%80%D9%88%D8%B1%20%20%E2%86%AF*%0A%20%E2%9D%97%20atom.bio%2Fharley_light%0A*%E2%9D%97%E2%87%86%20%D8%B1%D9%82%D9%80%D9%85%20%D8%A7%D9%84%D9%80%D9%85%D8%B7%D9%80%D9%88%D8%B1%20%20%E2%86%AF*%0A%20%E2%9D%97%20https%3A%2F%2Fwa.me%2F%2B201280244814%0A%F0%9F%91%BE%E2%94%99%E2%94%81%E2%94%81%E2%94%81%D9%87%D8%A7%D8%B1%D9%84%D9%8A%20%D9%84%D8%A7%D9%8A%D8%AA%E2%94%81%E2%94%81%E2%94%81%E2%94%8D%F0%9F%91%BE%0A*%E2%8E%94%20%E2%8B%85%20%E2%94%80%E2%94%80%E2%94%80%E2%94%81%20%E2%80%A2%EF%B9%9D%F0%9F%91%91%EF%B9%9E%E2%80%A2%20%E2%94%81%E2%94%80%E2%94%80%E2%94%80%20%E2%8B%85%20%E2%8E%94*%0A%20%E2%96%A2%20*%D9%82%D8%B3%D9%85%20%D8%A7%D9%84%D8%AC%D8%B1%D9%88%D8%A8%20%F0%9F%8E%8C*%0A%20*%E2%9F%90%E2%94%86.%D9%851*%0A%0A%20%20%E2%96%A2%20*%D9%82%D8%B3%D9%85%20%D8%A7%D9%84%D8%AF%D9%8A%D9%86%20%F0%9F%93%BF*%0A%20*%E2%9F%90%E2%94%86.%D9%852*%0A%0A%20%20%E2%96%A2%20*%D9%82%D8%B3%D9%85%20%D8%A7%D9%84%D9%85%D8%B7%D9%88%D8%B1%20%F0%9F%91%91*%0A%20*%E2%9F%90%E2%94%86.%D9%853*%0A%0A%20%20%E2%96%A2%20*%D9%82%D8%B3%D9%85%20%D8%A7%D9%84%D8%AA%D9%86%D8%B2%D9%8A%D9%84%D8%A7%D8%AA%20%F0%9F%9B%A1%EF%B8%8F*%0A%20*%E2%9F%90%E2%94%86.%D9%854*%0A%0A%20%20%E2%96%A2%20*%D9%82%D8%B3%D9%85%20%D8%A7%D9%84%D8%AA%D8%B1%D9%81%D9%8A%D9%87%20%F0%9F%95%B9*%0A%20*%E2%9F%90%E2%94%86.%D9%855*%0A%0A%20%20%E2%96%A2%20*%D9%82%D8%B3%D9%85%20%D8%A7%D9%84%D8%AA%D8%AD%D9%88%D9%8A%D9%84%D8%A7%D8%AA%20%E2%99%BB%EF%B8%8F*%0A%20*%E2%9F%90%E2%94%86.%D9%856*%0A%0A%20%20%E2%96%A2%20*%D9%82%D8%B3%D9%85%20%D8%A7%D9%84%D8%B5%D9%88%D8%AA%D9%8A%D8%A7%D8%AA%20%F0%9F%8E%A4*%0A%20*%E2%9F%90%E2%94%86.%D9%857*%0A%0A%E2%96%A2%20*%D9%82%D8%B3%D9%85%20%D8%A7%D9%84%D8%B0%D9%83%D8%A7%D8%A1%20%D8%A7%D9%84%D8%A7%D8%B5%D8%B7%D9%86%D8%A7%D8%B9%D9%8A%20%F0%9F%A4%96*%0A%20*%E2%9F%90%E2%94%86.%D9%858*%0A*%E2%8E%94%20%E2%8B%85%20%E2%94%80%E2%94%80%E2%94%80%E2%94%81%20%E2%80%A2%EF%B9%9D%F0%9F%91%91%EF%B9%9E%E2%80%A2%20%E2%94%81%E2%94%80%E2%94%80%E2%94%80%20%E2%8B%85%20%E2%8E%94*%0A*%D8%B1%D8%A7%D8%A8%D8%B7%20%D9%82%D9%86%D8%A7%D8%A9%20%D8%A7%D9%84%D9%85%D8%B7%D9%88%D8%B1%20%F0%9F%A4%96*%0A*%E2%8E%94%20%E2%8B%85%20%E2%94%80%E2%94%80%E2%94%80%E2%94%81%20%E2%80%A2%EF%B9%9D%F0%9F%91%91%EF%B9%9E%E2%80%A2%20%E2%94%81%E2%94%80%E2%94%80%E2%94%80%20%E2%8B%85%20%E2%8E%94*%0Ahttps%3A%2F%2Fwhatsapp.com%2Fchannel%2F0029VaXddtu0lwgiREisx82C%0A*%E2%8E%94%20%E2%8B%85%20%E2%94%80%E2%94%80%E2%94%80%E2%94%81%20%E2%80%A2%EF%B9%9D%F0%9F%91%91%EF%B9%9E%E2%80%A2%20%E2%94%81%E2%94%80%E2%94%80%E2%94%80%20%E2%8B%85%20%E2%8E%94*%0A%E2%8C%AC%20%D8%AA%D9%80%D9%80%E2%9C%8D%EF%B8%8E%D9%80%D9%80%D9%88%D9%82%D9%80%D9%80%D9%8A%D9%80%D9%80%D8%B9%20%E2%86%A1%F0%9F%96%8B%EF%B8%8F%0A%E3%80%8E%E2%9A%9C%EF%B8%8F%F0%9D%90%92%F0%9D%90%A9%F0%9D%90%9E%F0%9D%90%9E%F0%9D%90%9D%20%E2%8A%B0%F0%9F%90%89%E2%8A%B1%20%F0%9D%90%8A%F0%9D%90%A2%F0%9D%90%A7%F0%9D%90%A0%F0%9D%90%9D%F0%9D%90%A8%F0%9D%90%A6%E2%9A%9C%EF%B8%8F%E3%80%8F%0A*%E2%8E%94%20%E2%8B%85%20%E2%94%80%E2%94%80%E2%94%80%E2%94%81%20%E2%80%A2%EF%B9%9D%F0%9F%91%91%EF%B9%9E%E2%80%A2%20%E2%94%81%E2%94%80%E2%94%80%E2%94%80%20%E2%8B%85%20%E2%8E%94*%0A*%F0%9F%91%91%F0%9D%9A%83%F0%9D%99%B7%F0%9D%99%B4_%F0%9D%99%BB%F0%9D%99%B8%F0%9D%99%B6%F0%9D%99%B7%F0%9D%9A%83_%F0%9D%99%B1%F0%9D%99%BE%F0%9D%9A%83%F0%9F%91%91*%0A*%E2%8E%94%20%E2%8B%85%20%E2%94%80%E2%94%80%E2%94%80%E2%94%81%20%E2%80%A2%EF%B9%9D%F0%9F%91%91%EF%B9%9E%E2%80%A2%20%E2%94%81%E2%94%80%E2%94%80%E2%94%80%20%E2%8B%85%20%E2%8E%94*%0A%60.trim()%0A%20%20%20const%20_0x3c7cab%20%3D%20_0x5a1d%3B%0A%0A%20%20%20%20%20%20%20%20function%20_0x5a1d(_0x1b92fa%2C%20_0x42ca62)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20_0x5a1d39%20%3D%20_0x42ca()%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20_0x5a1d%20%3D%20function%20(_0x28d0f5%2C%20_0x342e36)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20_0x28d0f5%20%3D%20_0x28d0f5%20-%200x0%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20_0x4abc25%20%3D%20_0x5a1d39%5B_0x28d0f5%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20_0x4abc25%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20_0x5a1d(_0x1b92fa%2C%20_0x42ca62)%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20function%20_0x42ca()%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20_0xe1e20e%20%3D%20%5B'2409147cMTtvV'%2C%20'70SxKSwY'%2C%20'trim'%2C%20'2708027tOnEUS'%2C%20'831853GQAjyu'%2C%20'6ZrUjVF'%2C%20'%E2%81%A8%F0%9D%90%BB%F0%9D%90%B4%F0%9D%91%85%F0%9D%90%BF%F0%9D%90%B8%F0%9D%91%8C%20%F0%9D%90%BF%F0%9D%90%BC%F0%9D%90%BA%F0%9D%90%BB%F0%9D%91%87%E2%81%A9%F0%9F%91%91'%2C%20'406070MLYaeB'%2C%20'https%3A%2F%2Fwww.atom.bio%2Fharley_light'%2C%20'4YbGMkZ'%2C%20'840496IPJeXP'%2C%20'322835aPaRGc'%2C%20'VIDEO'%2C%20'3639410cLSfPv'%2C%20'sender'%2C%20'9LtUyCF'%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20_0x42ca%20%3D%20function%20()%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20_0xe1e20e%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20_0x42ca()%3B%0A%20%20%20%20%20%20%20%20%7D(function%20(_0x2979d9%2C%20_0x233f8f)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20_0x32315e%20%3D%20_0x5a1d%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20_0x3b1890%20%3D%20_0x2979d9()%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20while%20(!!%5B%5D)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20try%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20const%20_0x2cc4d6%20%3D%20parseInt(_0x32315e(0x5))%20%2F%200x1%20%2B%20parseInt(_0x32315e(0x1))%20%2F%200x2%20%2B%20-parseInt(_0x32315e(0xa))%20%2F%200x3%20*%20(parseInt(_0x32315e(0x3))%20%2F%200x4)%20%2B%20parseInt(_0x32315e(0x7))%20%2F%200x5%20%2B%20-parseInt(_0x32315e(0xf))%20%2F%200x6%20*%20(parseInt(_0x32315e(0xd))%20%2F%200x7)%20%2B%20parseInt(_0x32315e(0x4))%20%2F%200x8%20*%20(-parseInt(_0x32315e(0x9))%20%2F%200x9)%20%2B%20-parseInt(_0x32315e(0xb))%20%2F%200xa%20*%20(-parseInt(_0x32315e(0xe))%20%2F%200xb)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(_0x2cc4d6%20%3D%3D%3D%20_0x233f8f)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20break%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20_0x3b1890%5B'push'%5D(_0x3b1890%5B'shift'%5D())%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%20catch%20(_0x3284ad)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20_0x3b1890%5B'push'%5D(_0x3b1890%5B'shift'%5D())%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D(_0x42ca%2C%200x772cd))%3B%0A%20%20%20%20%20%20%20%20let%20buttonMessage%20%3D%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20'image'%3A%20pp%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20'caption'%3A%20str%5B_0x3c7cab(0xc)%5D()%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20'mentions'%3A%20%5Bm%5B_0x3c7cab(0x8)%5D%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20'footer'%3A%20''%20%2B%20wm%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20'headerType'%3A%200x4%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20'contextInfo'%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20'mentionedJid'%3A%20%5Bm%5B'sender'%5D%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20'externalAdReply'%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20'showAdAttribution'%3A%20!!%5B%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20'mediaType'%3A%20_0x3c7cab(0x6)%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20'mediaUrl'%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20'title'%3A%20_0x3c7cab(0x0)%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20'body'%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20'thumbnail'%3A%20img%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20'sourceUrl'%3A%20_0x3c7cab(0x2)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%20%20%20%20conn.sendMessage(m.chat%2C%20buttonMessage%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20quoted%3A%20m%0A%20%20%20%20%20%20%20%20%7D)%0A%0A%20%20%20%20%7D%20catch%20%7B%0A%20%20%20%20%20%20%20%20conn.reply(m.chat%2C%20'%5B%E2%9D%97%D8%AE%D8%B7%D8%A7%D8%A1%E2%9D%97%5D'%2C%20m)%0A%20%20%20%20%7D%0A%7D%0Ahandler.command%20%3D%20%2F%5E(%D8%A7%D9%84%D9%85%D9%87%D8%A7%D9%85%7C%D9%85%D9%87%D8%A7%D9%85)%24%2Fi%0Ahandler.exp%20%3D%2020%0Ahandler.fail%20%3D%20null%0Aexport%20default%20handler%0A%0Afunction%20clockString(ms)%20%7B%0A%20%20%20%20let%20h%20%3D%20isNaN(ms)%20%3F%20'--'%20%3A%20Math.floor(ms%20%2F%203600000)%0A%20%20%20%20let%20m%20%3D%20isNaN(ms)%20%3F%20'--'%20%3A%20Math.floor(ms%20%2F%2060000)%20%25%2060%0A%20%20%20%20let%20s%20%3D%20isNaN(ms)%20%3F%20'--'%20%3A%20Math.floor(ms%20%2F%201000)%20%25%2060%0A%20%20%20%20return%20%5Bh%2C%20m%2C%20s%5D.map(v%20%3D%3E%20v.toString().padStart(2%2C%200)).join('%3A')%0A%7D%0A
