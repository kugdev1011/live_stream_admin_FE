import { useState } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb.tsx';
import { Slash } from 'lucide-react';
import {
  changePassword,
  createAccount,
  deleteAccount,
} from '@/services/user.service';
import useUsersList from '@/hooks/useUsersList';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/lib/validation';
import { getAccountsListTableColumns } from './columns';
import { DataTable } from '@/components/common/DataTable';
import { UserResponse, USER_STATUS } from '@/type/users';
import { toast } from '@/hooks/use-toast';
import { ROLE } from '@/type/role';
import DeleteAccount from './modals/DeleteAccount_temp';
import CreateAccount, { _FormData } from './modals/CreateAccount';
import ResetPassword from './modals/ResetPassword';
import { NavLink } from 'react-router-dom';
import { APP_DASHBOARD_PATH } from '@/router';

const AccountList = () => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isResetPasswordModalOpen, setIsResetPasswordModalOpen] =
    useState(false);
  const [deletingAccountId, setDeletingAccountId] = useState<number | null>(
    null
  );
  const [keyword, setKeyword] = useState('');
  const [formData, setFormData] = useState<_FormData>({
    id: '',
    avatar: null,
    username: '',
    display_name: '',
    email: '',
    role: '',
    password: '',
    confirmPassword: '',
  });

  const {
    data,
    totalItems,
    currentPage,
    pageLimit,
    isLoading,
    sortBy,
    sortOrder,
    filteredRole,
    filteredStatus,
    refetchData,
    setCurrentPage,
    setPageLimit,
    setSortBy,
    setSortOrder,
    setFilteredRole,
    setFilteredStatus,
  } = useUsersList({
    page: DEFAULT_PAGE,
    limit: DEFAULT_PAGE_SIZE,
    keyword,
  });

  // table columns
  const columns = () =>
    getAccountsListTableColumns({
      onChangePassword: handelChangePasswordClick,
      onDelete: handleDelete,
      sort: {
        sortBy,
        sortOrder,
        setSortBy,
        setSortOrder,
      },
    });

  const handleSearch = (_keyword: string): void => setKeyword(_keyword);

  const handleFilterByRole = (role: ROLE | string): void =>
    setFilteredRole(role);

  const handleFilterByStatus = (status: USER_STATUS | string): void =>
    setFilteredStatus(status);

  const handlePageChange = (page: number) => setCurrentPage(page);
  const handlePageLimitChange = (limit: number) => setPageLimit(limit);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // change password
  const handelChangePasswordClick = (account: UserResponse) => {
    setIsResetPasswordModalOpen(true);
    setFormData((prev) => {
      return { ...prev, id: account.id?.toString() };
    });
  };
  const handelChangePassword = async () => {
    try {
      if (formData.password !== formData.confirmPassword) {
        toast({
          description: 'Passwords do not match!',
          variant: 'destructive',
        });
        return;
      }
      if (formData.password.length < 8) {
        toast({
          description: 'Password must be at least 8 characters long!',
          variant: 'destructive',
        });
        return;
      }
      await changePassword(formData.id, formData);
      setFormData({
        id: '',
        avatar: null,
        username: '',
        display_name: '',
        email: '',
        role: '',
        password: '',
        confirmPassword: '',
      });
      setIsResetPasswordModalOpen(false);
      refetchData();
      toast({
        description: 'Changed password successfully!',
      });
    } catch {
      toast({
        description: 'Failed to change password. Please try again.',
        variant: 'destructive',
      });
    }
  };

  // delete account
  const handleDelete = async (user: UserResponse) => {
    setIsDeleteModalOpen(true);
    setDeletingAccountId(user.id);
  };
  const handleDeleteAccount = async () => {
    if (!deletingAccountId) {
      toast({
        description: 'Failed to delete account. Please try again.',
        variant: 'destructive',
      });
      return;
    }
    try {
      await deleteAccount(deletingAccountId?.toString());
      refetchData();
      toast({
        description: 'Account deleted successfully!',
        variant: 'default',
      });
      setIsDeleteModalOpen(false);
      setDeletingAccountId(null);
    } catch {
      toast({
        description: 'Failed to delete account. Please try again.',
        variant: 'destructive',
      });
    }
  };

  // create account
  const handleAddAccountClick = () => setIsCreateModalOpen(true);
  const handleAddAccount = async () => {
    if (formData.password !== formData.confirmPassword) {
      toast({
        description: 'Passwords do not match!',
        variant: 'destructive',
      });
      return;
    }
    if (formData.password.length < 8) {
      toast({
        description: 'Password must be at least 8 characters long!',
        variant: 'destructive',
      });
      return;
    }
    await createAccount(formData);
    setFormData({
      id: '',
      avatar: null,
      username: '',
      display_name: '',
      email: '',
      role: '',
      password: '',
      confirmPassword: '',
    });
    setIsCreateModalOpen(false);
    refetchData();
  };

  return (
    <div className="px-8 pb-4">
      <div className="py-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink>
                <NavLink to={APP_DASHBOARD_PATH}>Dashboard</NavLink>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>Account List Page</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <DataTable
        data={data}
        totalCount={totalItems}
        canToggleColumns={false}
        columns={columns()}
        isLoading={isLoading}
        onRefresh={refetchData}
        actions={{
          search: {
            placeholder: 'Search...',
            value: keyword,
            onSearch: (_keyword: string): void => handleSearch(_keyword),
          },
          create: {
            label: 'New',
            isDisabled: isLoading,
            onClick: handleAddAccountClick,
          },
          sampleFilters: [
            {
              placeholder: filteredRole,
              description: 'Role —',
              selectedValue: filteredRole,
              options: ['All', ...Object.values(ROLE)],
              handleFilter: (selectedOption: string): void =>
                handleFilterByRole(selectedOption),
            },
            {
              placeholder: filteredStatus,
              description: 'Status —',
              selectedValue: filteredStatus,
              options: ['All', ...Object.values(USER_STATUS)],
              handleFilter: (selectedOption: string): void =>
                handleFilterByStatus(selectedOption),
            },
          ],
        }}
        pagination={{
          rowsPerPage: {
            value: pageLimit,
            onChange: (value: number) => handlePageLimitChange(value),
          },
          pages: {
            totalCount: totalItems,
            currentPage,
            limit: pageLimit,
            handlePageChange,
          },
        }}
      />

      {isDeleteModalOpen && (
        <DeleteAccount
          isOpen={isDeleteModalOpen}
          setOpen={setIsDeleteModalOpen}
          onDelete={handleDeleteAccount}
        />
      )}

      {isCreateModalOpen && (
        <CreateAccount
          isOpen={isCreateModalOpen}
          setOpen={setIsCreateModalOpen}
          data={formData}
          setFormData={setFormData}
          onInputChange={handleInputChange}
          onCreate={handleAddAccount}
        />
      )}

      {isResetPasswordModalOpen && (
        <ResetPassword
          isOpen={isResetPasswordModalOpen}
          setOpen={setIsResetPasswordModalOpen}
          data={formData}
          onInputChange={handleInputChange}
          onChangePassword={handelChangePassword}
        />
      )}
    </div>
  );
};

export default AccountList;
