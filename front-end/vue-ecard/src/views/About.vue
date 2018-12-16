<template>
  <div class="about">
    <Header subheadings="Docs"/>
    <article>
      <h1>1 简介</h1>
      <h3>1.1 背景</h3>
      <p>天津大学（其前身为北洋大学），始建于 1895 年 10 月 2 日，是中国第一所现代大学。目前，学校有教职工 4000 余人、全日制在校生 30000 余人，并有食堂、超市等各类商家数十家。</p>
      <p>每天，天津大学的在校师生都在和这些商家发生着各式各样的交易。校园内使用现有的一卡通系统进行日常的小笔金额交易和财务收支管理，其核心采用 Mifare NFC 技术进行即时数据交换，具有简单、即时、安全且无终端电量依赖等优点。然而，目前的校园一卡通管理终端只由散布在校园宿舍、食堂等场所的诸台固定设备登入，进行余额查询、流水查询和挂失解挂等工作，而缺少一个统一、通用的 Web 客户端。</p>
      <p>在此背景下，天津大学天外天工作室同天津大学校园一卡通管理中心达成合作协议。一卡通管理中心为我们提供相关接口，天外天工作室将提供一个跨 Android / iOS / Web 三端的校园卡管理客户端。目前，该合作仅仅在意向谈成阶段，接口尚未被指定，开发工作可能还需一段时间正式开始。</p>
      <p>作为天外天工作室的骨干成员，小组内成员决定模拟校园卡管理系统，开发目标为校园卡综合管理终端的 Web 项目。在开发过程中，将积累相应经验，提前制定需求、策划项目和熟悉业务流程，并计划将开发过程中的部分系统架构、视觉设计语言和业务逻辑代码应用于最终实际投入使用的工程中。</p>
      <h3>1.2 定义、缩略语</h3>
      <figure><table>
      <thead>
      <tr><th>术语 Terms</th><th>解释 Explanation</th></tr></thead>
      <tbody><tr><td>ecard</td><td>项目名称 / git 仓库名 / 一卡通缩写代称</td></tr><tr><td>校园卡</td><td>天津大学现有的 Mifare NFC 一卡通系统</td></tr><tr><td>校园网 / tju-wlan</td><td>可联通教育网和 TJU 内网的天津大学网络系统</td></tr></tbody>
      </table></figure>
      <h3>1.3 约束</h3>
      <ul>
      <li>利用天外天现有的单点登录系统 (TWT SSO Login) 实现天外天账号登录接入。</li>
      <li>无需改造或升级现有的 NFC 设备及软件。</li>
      <li>在通用 Web 平台上进行运行并测试。</li>
      <li>考虑到安全，限制在校园网环境下使用该软件。</li>

      </ul>
      <h3>1.4 参考资料</h3>
      <figure><table>
      <thead>
      <tr><th>资料名称</th><th>版本 / 日期</th><th>说明</th></tr></thead>
      <tbody><tr><td>nodejs 官方文档</td><td>10.13.0 NTS</td><td><a href='https://nodejs.org/en/' target='_blank' class='url'>https://nodejs.org/en/</a></td></tr><tr><td>vue 官方文档</td><td>VueJS 2</td><td><a href='https://vuejs.org/' target='_blank' class='url'>https://vuejs.org/</a></td></tr><tr><td>Mifare NFC</td><td>Standard 2018</td><td><a href='https://www.mifare.net/' target='_blank' class='url'>https://www.mifare.net/</a></td></tr><tr><td>W3C 互联网标准</td><td>HTML5/CSS3/ES6</td><td><a href='https://www.w3.org/' target='_blank' class='url'>https://www.w3.org/</a></td></tr></tbody>
      </table></figure>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <h1>2 目标、涉众分析和范围</h1>
      <h3>2.1 目标</h3>
      <ul>
      <li>提供易用、简洁、稳定且多终端的 Web 校园一卡通管理平台；</li>
      <li>方便消费者进行余额查询、流水查询与挂失、寻求帮助等操作；</li>
      <li>方便商家进行收入管理；</li>
      <li>为财务处提供充值、提现及其它必要的管理员功能。</li>

      </ul>
      <h3>2.2 涉众分析</h3>
      <figure><table>
      <thead>
      <tr><th>序号</th><th>涉众</th><th>代表人物或机构</th><th>待解决的问题 / 对系统的期望</th></tr></thead>
      <tbody><tr><td>1</td><td>消费者</td><td>天津大学教职工、学生</td><td>余额查询、流水查询与挂失、寻求客户服务帮助</td></tr><tr><td>2</td><td>商家</td><td>棠园食堂、北洋综合超市</td><td>收入管理、收入流水查询、详单查询</td></tr><tr><td>3</td><td>财务处</td><td>天津大学财务处、校园一卡通管理中心</td><td>审核充值、协助挂失与解挂、协助商家提现等</td></tr></tbody>
      </table></figure>
      <h3>2.3 范围</h3>
      <p><strong>总体范围：</strong> 校园卡管理与用户终端设计</p>
      <p><strong>地域范围：</strong> 天津大学（包含卫津路校区、北洋园校区、滨海工业研究院）</p>
      <p><strong>软硬件采购：</strong> NFC 读取设备、管理设备、印制设备与用户终端 Web 浏览设备</p>
      <p><strong>培训：</strong> 开学 / 入职时期对用户的必要引导</p>
      <p>本系统不包括奖助学金、勤管办补助、物价补贴等系统接入范围。</p>
      <p>&nbsp;</p>
      <h1>3 业务概念分析</h1>
      <h3>3.1 概述</h3>
      <p>本系统主要的功能有 消费查询、余额查看、流水查询、挂失补办、充值消费、账户提现</p>
      <h3>3.2 业务概念一览</h3>
      <p><img src='https://i.loli.net/2018/11/20/5bf3f618f0da8.png' alt='消费者' referrerPolicy='no-referrer' /></p>
      <p>										<strong>消费者</strong></p>
      <p><img src='https://i.loli.net/2018/11/20/5bf3f76861ced.png' alt='' referrerPolicy='no-referrer' /></p>
      <p>									<strong>商家</strong></p>
      <p><img src='https://i.loli.net/2018/11/20/5bf4290738f5e.png' alt='' referrerPolicy='no-referrer' /></p>
      <p>									<strong>财务处</strong></p>
      <h3>3.3 流水查询</h3>
      <p><img src='https://i.loli.net/2018/11/20/5bf42d2517799.png' alt='' referrerPolicy='no-referrer' /></p>
      <h3>3.4 账户修改</h3>
      <p><img src='https://i.loli.net/2018/11/20/5bf42e55d1b87.png' alt='' referrerPolicy='no-referrer' /></p>
      <p>&nbsp;</p>
      <h1>4 业务流程分析</h1>
      <h3>4.1 概述</h3>
      <p>校园卡消费和商家提现都需要先查看校园卡的相应额度。校园卡的挂失和补办需要用户提交信息，由财务处进行审核。</p>
      <h3>4.2 消费流程</h3>
      <p>状态机图</p>
      <p><img src='https://i.loli.net/2018/11/20/5bf40f8336c0a.png' alt='消费.png' referrerPolicy='no-referrer' /></p>
      <h3>4.3 提现流程</h3>
      <p>状态机图</p>
      <p><img src='https://i.loli.net/2018/11/20/5bf40f8386aa7.png' alt='提现.png' referrerPolicy='no-referrer' /></p>
      <h3>4.3 校园卡挂失和补办</h3>
      <p>状态机图</p>
      <p><img src='https://i.loli.net/2018/11/20/5bf416d5d4308.png' alt='挂失和补办.png' referrerPolicy='no-referrer' /></p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <h1>5 功能性需求</h1>
      <h3>5.1 执行者分析</h3>
      <p><img src='https://i.loli.net/2018/11/20/5bf3f6280ba08.png' alt='执行者分析.png' referrerPolicy='no-referrer' /></p>
      <h3>5.2 总用例图</h3>
      <p><img src='https://i.loli.net/2018/11/20/5bf3f628d3ae7.png' alt='总用例图.png' referrerPolicy='no-referrer' /></p>
      <h3>5.3 消费者用例图</h3>
      <p><img src='https://i.loli.net/2018/11/20/5bf3f62870ea7.png' alt='' referrerPolicy='no-referrer' /></p>
      <figure><table>
      <thead>
      <tr><th>编号</th><th>2.1</th></tr></thead>
      <tbody><tr><td>名称</td><td>按时间倒序查看消息记录</td></tr><tr><td>执行者</td><td>消费者</td></tr><tr><td>描述</td><td>按时间倒序查看消费记录，可以看到消费的时间和店铺，每次消费的具体金额</td></tr><tr><td>前置条件</td><td>无</td></tr><tr><td>结束状况</td><td>系统的数据不会发生任何变化</td></tr><tr><td>说明</td><td>财务处工作人员也可以看到这部分信息</td></tr></tbody>
      </table></figure>
      <figure><table>
      <thead>
      <tr><th>编号</th><th>2.2</th></tr></thead>
      <tbody><tr><td>名称</td><td>按天、周、月或者自定义时间段进行统计</td></tr><tr><td>执行者</td><td>消费者</td></tr><tr><td>描述</td><td>可以直接在前端界面看到某些简单的统计信息，例如每月消费趋势条形图等</td></tr><tr><td>前置条件</td><td>无</td></tr><tr><td>结束状况</td><td>系统的数据不会发生任何变化</td></tr><tr><td>说明</td><td>财务处工作人员也可以看到这部分信息</td></tr></tbody>
      </table></figure>
      <figure><table>
      <thead>
      <tr><th>编号</th><th>4</th></tr></thead>
      <tbody><tr><td>名称</td><td>提示充值</td></tr><tr><td>执行者</td><td>系统</td></tr><tr><td>描述</td><td>当消费者的余额小于某个设定好的金额时，消费者登录校园卡系统便会受到该充值的温馨提示</td></tr><tr><td>前置条件</td><td>无</td></tr><tr><td>结束状况</td><td>系统的数据不会发生任何变化</td></tr><tr><td>说明</td><td>&nbsp;</td></tr></tbody>
      </table></figure>
      <figure><table>
      <thead>
      <tr><th>编号</th><th>3</th></tr></thead>
      <tbody><tr><td>名称</td><td>挂失</td></tr><tr><td>执行者</td><td>消费者</td></tr><tr><td>描述</td><td>当消费者的校园卡遗失后，可以手动进入校园卡系统进行挂失操作，挂失后该校园卡的消费功能会被禁止，直到消费者到财务处进行校园卡补办</td></tr><tr><td>前置条件</td><td>无</td></tr><tr><td>结束状况</td><td>对应消费者的校园卡的状态会变为挂失</td></tr><tr><td>说明</td><td>&nbsp;</td></tr></tbody>
      </table></figure>
      <h3>5.4 财务处负责人用例图</h3>
      <p><img src='https://i.loli.net/2018/11/20/5bf3f628d2de9.png' alt='财务处负责人用例.png' referrerPolicy='no-referrer' /></p>
      <figure><table>
      <thead>
      <tr><th>编号</th><th>8</th></tr></thead>
      <tbody><tr><td>名称</td><td>充值</td></tr><tr><td>执行者</td><td>财务处负责人员</td></tr><tr><td>描述</td><td>财务处负责人员在线下受到消费者充值的现金后，可以在系统里给消费者的账户进行充值</td></tr><tr><td>前置条件</td><td>无</td></tr><tr><td>结束状况</td><td>对应消费者的余额发生了变化</td></tr><tr><td>说明</td><td>&nbsp;</td></tr></tbody>
      </table></figure>
      <figure><table>
      <thead>
      <tr><th>编号</th><th>9</th></tr></thead>
      <tbody><tr><td>名称</td><td>提现</td></tr><tr><td>执行者</td><td>财务处负责人员</td></tr><tr><td>描述</td><td>财务处负责人员在线下收到商家的提现请求后，会给予商家现金，对应商家的账户余额会变少</td></tr><tr><td>前置条件</td><td>无</td></tr><tr><td>结束状况</td><td>对应商家的账户余额变少</td></tr><tr><td>说明</td><td>&nbsp;</td></tr></tbody>
      </table></figure>
      <figure><table>
      <thead>
      <tr><th>编号</th><th>10</th></tr></thead>
      <tbody><tr><td>名称</td><td>补办</td></tr><tr><td>执行者</td><td>财务处负责人员</td></tr><tr><td>描述</td><td>财务处负责人员收到消费者的补办校园卡请求后，会补办校园卡，补办后对应校园卡可以正常进行消费操作</td></tr><tr><td>前置条件</td><td>无</td></tr><tr><td>结束状况</td><td>对应消费者的校园卡的状态变为正常</td></tr><tr><td>说明</td><td>&nbsp;</td></tr></tbody>
      </table></figure>
      <h3>5.5 商家用例</h3>
      <p><img src='https://i.loli.net/2018/11/20/5bf406fd0a296.png' alt='商家用例.png' referrerPolicy='no-referrer' /></p>
      <figure><table>
      <thead>
      <tr><th>编号</th><th>11</th></tr></thead>
      <tbody><tr><td>名称</td><td>扣钱并转到自己账户</td></tr><tr><td>执行者</td><td>商家</td></tr><tr><td>描述</td><td>消费者在商家处进行消费时，商家可以对校园卡进行扣钱操作，同时响应的金额会转到商家的账户余额中，并且开具收据</td></tr><tr><td>前置条件</td><td>无</td></tr><tr><td>结束状况</td><td>对应消费者的校园卡的余额变少，商家余额变多</td></tr><tr><td>说明</td><td>开具收据为强制行为，财务处负责人员可以监控所有消费记录</td></tr></tbody>
      </table></figure>
      <p>&nbsp;</p>
      <h1>6 非功能性需求</h1>
      <h3>6.1 系统架构需求</h3>
      <p><img src='https://i.loli.net/2018/11/20/5bf3f5f2562ac.png' alt='1' referrerPolicy='no-referrer' /></p>
      <h3>6.2 接口</h3>
      <p>本项目的接口文档详见后续提交的《软件设计说明书》。</p>
      <h3>6.3 安全性</h3>
      <ul>
      <li>使用 TWT SSOLogin 的 Token 形式完成鉴权；</li>
      <li>使用 HTTPS 技术对访问回路进行加密；</li>
      <li>Mifare NFC 终端设备对涉及财务相关的扇区数据，使用 CPU 加密。</li>

      </ul>
      <h3>6.4 性能</h3>
      <ul>
      <li>能够承受最高同时 300 人的访问与基本查询操作；</li>
      <li>在平均性能的客户端下，不得有视觉帧率低于 30fps 的动画及视觉效果出现；</li>
      <li>平均每个 Webpage 的加载时长控制在 600ms 以内。</li>
      <li>以上 1 /3  要求需要对服务器性能及网络环境进行升级配置。</li>

      </ul>
      <h3>6.5 界面</h3>
      <ul>
      <li>消费者主界面：查询余额、流水、挂失、提示充值
      商家主界面：扣钱并转到自己账户、查看余额和收入流水
      财务处主界面：查询消费者和商家的流水、查询消费者和商家的余额、所有用户的信息、充值、提现、补办等。</li>
      <li>视觉上，界面采用 Material Design 标准与极简主义风格设计，采用 TypeType 的 TT Directors 字体作为 brandfont，并使用单色主色调。</li>
      <li>更多界面与交互逻辑细则将于开发阶段确定。</li>

      </ul>
    </article>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "about",
  components: {
    Header,
    Footer
  }
};
</script>

<style scoped lang="scss">
input {
  display: block;
  margin: 0px 0 30px;
}
h1 {
  border-bottom: 1px solid #ddd;
  padding-bottom: 18px;
  font-size: 30px;
  font-weight: bold;
}
article {
  margin: 30px 0 50px;
  img {
    filter: invert(0.92);
  }
}
</style>
