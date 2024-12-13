/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects() {
        return [
            {
                source: '/', // 源路径
                destination: '/workbench', // 目标路径
                permanent: true, // 是否为永久重定向（301），默认为 false（302）
            },
        ]
    }


};

export default nextConfig;
