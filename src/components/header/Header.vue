<template>
  <header class="header">
    <div class="header__top main-container">
      <div class="header__top__left">
        <img
          src="https://static.104.com.tw/logo/104logo_vip_180x25.gif"
          alt="logo"
        />
        <span class="">Company Name</span>
      </div>
      <div class="header__top__right">
        <a href="javascript:;">常見問題</a>
        <a href="javascript:;" ref="focusQrCode"
          ><i class="fas fa-mobile-alt"></i>APP</a
        >
        <Tooltip :target="() => $refs.focusQrCode" customClass="qrcodeTooltip">
          <img
            src="https://localhost/vipphp/static/img/header/app-qr-code.png"
            alt="qrcode"
          />
          <p>掃瞄QR Code 下載APP 即時接收應徵通知</p>
        </Tooltip>
        <el-dropdown>
          <span class="el-dropdown-link">
            User Name<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>修改密碼</el-dropdown-item>
            <el-dropdown-item>登出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="heade__nav">
      <div class="main-container">
        <el-menu default-active="1" class="heade__nav__menu" mode="horizontal">
          <el-menu-item
            v-for="(item, idx) in navMenu"
            :key="`nav_${idx}`"
            :index="`${(idx = 1)}`"
          >
            {{ item.label }}
            <template v-if="item.child">
              <ul class="subMenu">
                <li
                  v-for="(child, inx) in item.child"
                  :key="`subMenu_${inx}`"
                  class="subMenu__item"
                >
                  {{ child.label }}
                </li>
              </ul>
            </template>
          </el-menu-item>
        </el-menu>
        <div class="header__search">
          <input
            type="text"
            placeholder="请输入内容"
            v-model="searchText"
            class="header__search--input"
          />
          <button
            v-if="searchText.length > 0"
            class="header__search--clear"
            @click="clearText"
          >
            <i class="fas fa-times"></i>
          </button>
          <button class="header__search--btn" @click="submitSearch">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="header__alert">
      <el-alert title="错误提示的文案" type="error" center show-icon>
      </el-alert>
    </div>
  </header>
</template>

<script src="./Header.ts"></script>

<style lang="scss" scoped>
.header__top {
  display: flex;
  padding: 20px 0;
  justify-content: space-between;
  align-items: center;

  .useeList {
    color: $black;
    background-color: #f00;
  }
}

.header__top__left {
  > img {
    margin-right: 10px;
  }
  > img,
  > span {
    vertical-align: bottom;
  }
}

.header__top__right {
  > a {
    margin: 5px;
  }
}

.heade__nav {
  background-color: $turquoise-blue;
  > .main-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.el-menu {
  &.heade__nav__menu {
    border-bottom: 0 solid #000;
    background-color: transparent;
    > .el-menu-item {
      position: relative;
      color: #fff;
      font-size: 18px;
      > .subMenu {
        display: none;
        list-style-type: none;
        margin: 0;
        padding-left: 0;
        position: absolute;
        top: 105%;
        left: 0;
        background-color: #fff;
        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
        > .subMenu__item {
          margin: 0;
          padding: 0 15px;
          font-size: 16px;
          color: $black;
          &:hover {
            color: #fff;
            background-color: $eastern-blue;
          }
        }
      }
      &:hover,
      &:active,
      &:focus {
        color: #fff;
        background-color: $eastern-blue;
        > .subMenu {
          display: block;
        }
      }
    }
  }
}

.header__search {
  max-width: 250px;
  border-radius: 3px;
  overflow: hidden;
  position: relative;
  &--input,
  &--btn {
    vertical-align: middle;
  }
  &--input {
    background-color: $eastern-blue;
    border: 1px solid $eastern-blue;
    border-radius: 3px;
    box-sizing: border-box;
    color: $white;
    padding: 3px 26px 3px 12px;
    outline: none;
    &::placeholder {
      color: rgba(255, 255, 255, 0.3);
    }
  }
  &--clear,
  &--btn {
    background-color: transparent;
    border: 0;
    color: $white;
    outline: none;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto 0;
  }
  &--clear {
    font-size: 12px;
    margin-right: 20px;
  }
  &--btn {
    font-size: 13px;
  }
}
</style>
