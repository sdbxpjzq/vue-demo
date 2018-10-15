<template>
    <div class="page">
        <vue-plupload class="image"
                          v-bind="pluploadOptions"
                          v-on="pluploadHandlers">
              <a href="javascript:;">
                <i></i>
                <span>上传图片</span>
              </a>
            </vue-plupload>
    </div>
</template>

<script>
/* eslint-disable */
import _ from 'lodash';

export default {
    data() {
    return {
      pluploadOptions: this._getPluploadOptions.call(this),
      pluploadHandlers: this._getPluploadHandlers.call(this),
    }
  },
    methods: {
        _getPluploadOptions() {
            return {
                runtimes: 'html5',
                url: `https://m.mafengwo.cn/interface/pic_upload.php`,
                flash_swf_url: `https://m.mafengwo.cn/swf/plupload/Moxie.swf`,
                filters: {
                    max_file_size: '300mb',
                    mime_types: '*',
                    prevent_duplicates: true,
                },
                required_features: {
                    send_browser_cookies: true,
                },
                headers: {
                    origin: "https://w.mafengwo.cn",
                },
                file_data_name: 'Filedata',
                multi_selection: true,
                multipart_params: { cat: 'rbook_comment', rtype: 'w250' },
            };
        },
        _getPluploadHandlers() {
            return {
                PostInit: (up) => {
                    $('.uploader-selector, .image-uploader').find('input[type="file"]').attr('accept', 'image/*');
                },
                FilesAdded: (up, files) => {
                    const currentImgNum = this.report.img_paths.length;

                    if ((currentImgNum + files.length) > 9) {
                        this.$Tip.show('最多只允许上传9张图片');
                    }

                    _.each(_.slice(files, 0, 9 - currentImgNum), (file, i) => {
                        this.report.img_paths.push(`uploading://${  file.id}`);
                        this.report.img_urls.push(`uploading://${  file.id}`);
                    });

                    // 选择的媒体类型为图片
                    this.report.type = 1;
                },
                UploadProgress: (up, file) => {
                    this.$set(this.report.img_percents, `uploading://${  file.id}`, Math.floor(file.percent));
                },
                QueueChanged: (up) => {
                    setTimeout(() => {
                up.start();
            }, 500);
                },
                FileUploaded: (up, file, info) => {
                    let response = $.parseJSON(info.response);

                    _.each(this.report.img_urls, (n, i) => {
                        if (n == (`uploading://${  file.id}`)) {
                            this.$set(this.report.img_urls, i, response.rtype_url);
                        }
                    });
                    _.each(this.report.img_paths, (n, i) => {
                        if (n == (`uploading://${  file.id}`)) {
                            this.$set(this.report.img_paths, i, response.file_id);
                        }
                    });
                },
                Error: (up, error) => {
                    if (error.message == 'File size error.') {
                        this.$Pop.alert('请上传小于30M的图片');
                    }
                },
            };
        },
    },
};
</script>

