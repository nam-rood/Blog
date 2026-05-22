---
title: "Mybatis-Plus学习笔记（1）"
published: 2025-09-23
description: "特性"
draft: false
category: "后端开发"
tags: [MyBatis-Plus, Java, ORM]
---

特性

- 无入侵：引入mybatis-plus不会对现有的mybatis框架产生影响

- 依赖少：仅仅依赖mybatis以及mybatis-spring

- 损耗小：启动会自动注入级基本的CURD，性能基本无损耗，直接面向对象操作

- 预防sql注入：内置sql注入剥离器，有效预防sql注入攻击

- 通用CRUD操作：内置通用的Mapper，通用Service。仅需要少量配置就可以实现单表大部分CRUD操作。

- 多种主键策略：支持多大4种主键策略（内含分布式唯一ID生成器），可自由配置，完美解决主键问题。

- 支持热加载：Mapper对于的XML支持热加载，对于简单的CRUD操作，可以无XML启动。

- 支持ActiveRecord：

- 支持代码生成：采用代码或者Maven插件可以快速生成Mapper，Model，Service，Controller层代码，支持模板引擎，以及各种自定义配置。

- 支持自定义全局通用操作：支持全局通用方法注入（Write once ，use anywhere）

- 支持关键词自动转义：支持数据库关键词自动转义，还可自定义关键词。

- 内置分页插件：可输出sql语句以及其执行时间，建议开发测试时启用该功能，有效解决慢查询。

- 内置全局拦截插件：提供全表delete，update操作智能分析阻断，预防误操作。

定义Mapper接口时需要继承BaseMapper

```
public interface UserMapper extends BaseMapper
```

查找的规则

查找时的默认规则

- 类名驼峰转下划线作为表名的表查找信息

- 名为id的字段作为主键

- 变量名驼峰转下划线作为表的字段名

如果需求不符合默认规则，则需要自己手动配置

- @TableName：用来指定表名

- @TableId：用来指定表种的主键字段信息

- 主键字段id的增长有多种方式

- AUTO：数据库自增长

- INPUT：通过set方法自行输入

- ASSIGN_ID：由Mybatis-plus分配

- @TableField：用来指定表种的普通字段信息

- 注意!!当一个字段名是以”is”开头时，mybatis-plus会默认没有is，因为他认为is开头的字段全是布尔类型，所以is会直接省略。

- 当字段名与数据库关键字冲突时，需要通过TableField指定，并且要加上’ ‘。

- 如果数据库中不存在该字段，则在变量名定义的上一行添加”@TableField(exist = false)”。

核心功能

条件构造器，Wrapper是条件构造的抽象类。

例如：

```
void testSelectByIds() {
        QueryWrapper wrapper = new QueryWrapper(); //定义一个需要查询的模板
        wrapper.select("id","name");    //设置需要查询的数据                                                            
        wrapper.like("name","吴");    //模糊查询带有“吴”字的用户
        List user = userMapper.selectList(wrapper);  //查询
        user.forEach(System.out::println); //输出样例
    }
```

```
void testupdate() {
        UpdateWrapper wrapper = new UpdateWrapper()
                .setSql("phone = 123") //SET phone = 123
                .eq("id",1); //WHERE id = 1
        userMapper.update(null,wrapper); //更新数据
    }
```

无论是QueryWrapper还是UpdateWrapper在构造条件的时候都需要写死字段名称，这肯定不行呀。

解决方法：基于变量的gettter方法结合反射技术，只需要将条件名对应的getter方法传递给MybatisPlus，ta就可以计算出对应的变量名了。LambdaQueryWrapper和LambdaUpdateWrapper

```
void testlambdaQuery() {
        QueryWrapper wrapper = new QueryWrapper();
        wrapper.lambda().select(User::getId,User::getName);
        wrapper.lambda().like(User::getName,"吴");
        List user = userMapper.selectList(wrapper);
        user.forEach(System.out::println);
    }
```

自定义SQL语句

```
@Select("select * from car ${ew.customSqlSegment}")
Page selectByPrimaryKey(Page page, @Param(Constants.WRAPPER) QueryWrapper queryWrapper);
```

多表查询

```
@Test
void testCustomJoinWrapper() {
    // 1.准备自定义查询条件
    QueryWrapper wrapper = new QueryWrapper()
            .in("u.id", List.of(1L, 2L, 4L))
            .eq("a.city", "北京");
    // 2.调用mapper的自定义方法
    List users = userMapper.queryUserByWrapper(wrapper);
    users.forEach(System.out::println);
}
```

```
//UserMapper中自定义代码
@Select("SELECT u.* FROM user u INNER JOIN address a ON u.id = a.user_id ${ew.customSqlSegment}")
List queryUserByWrapper(@Param("ew")QueryWrapper wrapper);
```

Service接口

MybatisPlus提供了通用的Service接口及默认实现，封装了一些常用的service模板方法

- save：新增

- save：新增单个元素

- saveBatch：批量新增

- saveOrUpdate：根据id判断，如果存在就不新增

- saveOrUpdateBatch：批量的新增或者修改

- remove：删除

- removeById：根据id删除

- removeByIds：根据id批量删除

- removeByMap：根据Map中的键值对作为条件删除

- remove（Wrapper）：根据Wrapper条件删除

- update：更新

- updateById：根据id修改

- update（Wrapper）：根据UpdateWrapper修改，Wrapper中包含了set和where部分

- update（T，Wrapper）：按照T内的数据修改与Wrapper匹配到的数据

- updateBatchById：根据id批量修改

- get：查询单个结果

- getById：根据id查询1条数据

- getOne（Wrapper）：根据Wrapper查询1条数据

- getBaseMapper：获取Service内的BaseMapper实现，某些时候需要直接调用Mapper内的自定义SQL时可以用这个方法获取到Mapper

- list：查询集合结果

- listByIds：根据id批量查询

- list（Wrapper）：根据Wrapper条件查询多条数据

- list（）：查询所有

- count：计数

- count（）：统计所有数量

- count（Wrapper）：统计符合Wrapper条件的数据数量

- page：分页查询

先自定义IService接口，这个接口需要继承IService,再由UserServiceImpl实现IUserService接口

```
public interface IUserService extends IService { }
```

Service基本使用方法

接口需要两个实体：

- UserFormDTO：代表新增时的用户表单

- UserVO：代表查询的返回结果

```
package com.itheima.mp.domain.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
@ApiModel(description = "用户表单实体")
public class UserFormDTO {
    @ApiModelProperty("id")
    private Long id;
    @ApiModelProperty("用户名")
    private String name;
    @ApiModelProperty("密码")
    private String password;
    @ApiModelProperty("电话号码")
    private String phone;
}
```

```
package com.itheima.mp.domain.vo;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
@ApiModel(description = "用户VO实体")
public class UserVO {
    @ApiModelProperty("id")
    private Long id;
    @ApiModelProperty("用户名")
    private String name;
    @ApiModelProperty("密码")
    private String password;
    @ApiModelProperty("电话号码")
    private String phone;
}

```

根据Restful风格编写Controller接口方法
