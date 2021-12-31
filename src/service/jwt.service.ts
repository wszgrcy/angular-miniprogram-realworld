import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  getToken(): String {
    return wx.getStorageSync('jwtToken');
  }

  saveToken(token: String) {
    wx.setStorageSync('jwtToken', token);
  }

  destroyToken() {
    wx.removeStorageSync('jwtToken');
  }
}
