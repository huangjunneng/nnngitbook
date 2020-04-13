var moment = require('moment');
module.exports = {
    book: {
        assets: './assets',
        css: [
          'test.css'
        ],
      },
    // 钩子函数
    hooks: {
        "init": function() {
            
            this.log.debug.ln('init', this.options.pluginsConfig.test001);

            test001 = this.options.pluginsConfig["test001"];
            console.log("hjn````",test001)
        },
        "page:before": function(page) {
            this.log.debug.ln('page:before', page.content);
            console.log( page.content);
            if (test001) {

                var time = '<span class="time">\n {{file.mtime | date("' + test001.time_format + '")}}\n</span>';
                var str = `<div id="test001-container">
                   <span class="email">${test001.email}</span>
                    <span class="name">${test001.name}</span>
                    ${time}
                </div>`;
                
                page.content = page.content + '\n' + str;
            }

            return page;
        },
        "page": function(page) {
            this.log.debug.ln('page', JSON.stringify(page.content));

            return page;
        },
        "finish:before": function() {
            this.log.debug.ln('finish:before', this.options.pluginsConfig['favicon-absolute']);
        },
        "finish": function() {
            this.log.debug.ln('finish', this.options.pluginsConfig['favicon-absolute']);

    
        }
    },

    // 代码块
    blocks: {

    },

    // 过滤器
    filters: {
        date: function(d, format) {
            console.log(123)
           return moment(d).format(format)
        }
    }
};