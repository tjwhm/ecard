create database ecard character set utf8;
use ecard;
create table user (
  id int(11) primary key not null auto_increment,
  user_number varchar(15) not null comment '学号',
  user_name varchar(255) not null comment '名称',
  avatar varchar(100) comment '用户头像',
  type tinyint(4) not null default 0 comment '用户类型，0为消费者，1为商家，2为财务处',
  balance double not null default 0.0 comment '卡中余额',
  card_status tinyint(4) not null default 0 comment '卡挂失为1',
  created_at timestamp not null default current_timestamp(),
  updated_at datetime default null on update current_timestamp()
);

create table record(
  id int(11) primary key not null auto_increment,
  type tinyint(4) not null default 0 comment '0为消费，1为充值',
  value double not null comment '变动金额',
  location varchar(255) not null comment '消费地址',
  latest_balence double comment '变动以后的余额',
  created_at timestamp not null default current_timestamp
);

