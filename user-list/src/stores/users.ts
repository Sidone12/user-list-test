import { defineStore } from 'pinia'
import getUsers from '../api/getUsers'
import deleteUser from '../api/deleteUser'
import postUser from '../api/postUser'
import type { User } from '../api/types'

export interface UserStore {
    users: User[]
    user: User
    modalVisible: boolean
    searchtoken: string
}

export const useUsersStore = defineStore('users', {
    state: (): UserStore => ({
        users: [],
        user: {} as User,
        modalVisible: false,
        searchtoken: '',
    }),
    actions: {
        async fetchUsers(): Promise<void> {
            const users = await getUsers()
            if (this.searchtoken?.length > 0) {
                this.users = users.filter(
                    (el) =>
                        el.first_name.includes(this.searchtoken) ||
                        el.last_name.includes(this.searchtoken) ||
                        el.email.includes(this.searchtoken)
                )
                return
            }
            this.users = users
        },
        async setSearchtoken(token: string) {
            console.log(token)
            this.searchtoken = token
            await this.fetchUsers()
        },
        async addUser(newUser: User): Promise<void> {
            const { first_name, email } = newUser
            const user = await postUser(first_name, email)
            this.users.push(user)
        },
        async deleteSingleUser(id: number): Promise<void> {
            await deleteUser(id)
            await this.fetchUsers()
        },
        addNewDataToUser(newdata: { tel: string; address: string }): void {
            const { tel, address } = newdata
            this.user.tel = tel
            this.user.address = address
        },
        setSelectedUser(id: number): void {
            this.user = this.users.find((el) => el.id == id)
        },
        setModalVizibility(): void {
            this.user = null
        },
    },
})
