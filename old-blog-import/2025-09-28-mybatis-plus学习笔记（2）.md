# Mybatis-Plus学习笔记（2）

- 日期: 2025-09-28T20:51:24
- 原链接: https://www.nam-rood.online/index.php/2025/09/28/mybatis-plus%e5%ad%a6%e4%b9%a0%e7%ac%94%e8%ae%b0%ef%bc%882%ef%bc%89/
- Slug: mybatis-plus学习笔记（2）

---

温馨提示：服务层实现的时候，需要让YourService 继承ServiceImpl（因为这个原因，测了两个小时…）

控制层

按照Restful风格编写Controller接口

```
@Api(tags = "用户管理接口")
@RequiredArgsConstructor
@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private final IUserService userService;

    @PostMapping("")
    @ApiOperation("新增用户")
    public void saveUser(@RequestBody UserFormDTO userFormDTO) {
        //1.转换DTO为PO
        User user = BeanUtil.copyProperties(userFormDTO, User.class);
        //2.新增
        userService.save(user);
    }
    @GetMapping("/{id}")
    @ApiOperation("根据id查询用户")
    public UserVO queryUserById(@PathVariable("id") Long userId){
        // 1.查询用户
        User user = userService.getById(userId);
        // 2.处理vo
        System.out.println(user);
        return BeanUtil.copyProperties(user, UserVO.class);
    }
```

一些自定义的功能就需要先在service层和mapper中编写

```
public interface UserMapper extends BaseMapper {
    @Update("UPDATE user SET password = #{newpassword} WHERE id = #{id}")
    void changePassword(@Param("newpassword") String newpassword, @Param("id") Long id);
}
```

```
@Service
public class UserService extends ServiceImpl implements IUserService {
    @Autowired
    private UserMapper userMapper;

    @Override
    public void changepassword(Long id, String password) {
        userMapper.changePassword(password, id);
    }
}
```

AbstractWrapper公有方法

方法名

解释

eq

ne

gt

ge

lt

le

between

notBetween

like

notLike

likeLeft

likeRight

isNull

isNotNull

in

notln

inSql

notlnSql

groupBy

orderByAsc

orderByDesc

orderBy

having

func

or

and

nested

apply

last

exists

notExists

未完待续……
